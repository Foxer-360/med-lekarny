import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loader from '../Loader';
import { adopt } from 'react-adopt';

const isExternalLink = url => {
  const pattern = /^https?|^www/i;
  return pattern.test(url);
};

const GET_CONTEXT = gql`
  {
    languageData @client
  }
`;

const ComposedQuery = adopt({
  context: ({ render }) => <Query query={GET_CONTEXT}>{({ data }) => render(data)}</Query>,
  getPagesUrls: ({ render, context: { languageData } }) => {
    if (!languageData) {
      console.log(languageData);
      return render({ loading: true });
    }
    return (
      <Query query={GET_PAGES_URLS} variables={{ language: languageData.id }}>
        {data => {
          return render(data);
        }}
      </Query>
    );
  },
});

const GET_PAGES_URLS = gql`
  query pagesUrls($language: ID!) {
    pagesUrls(where: { language: $language }) {
      id
      page
      url
      name
      description
    }
  }
`;

const ComposerLink = props => {
  const { children, urlNewWindow, url, pageId, ...args } = props;

  return (
    <ComposedQuery>
      {({ getPagesUrls: { loading, error, data } }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        if (error) {
          return `Error: ${error}`;
        }

        let pageUrlObj;
        const { pagesUrls } = data;

        if (pagesUrls) {
          pageUrlObj = pagesUrls.find(u => u.page === pageId || u.url === url);
        }
        if (isExternalLink(url) || args.forceHtml || urlNewWindow) {
          return (
            <a
              href={(isExternalLink(url) && url) || (pageUrlObj && pageUrlObj.url) || '/404'}
              {...args}
              target={urlNewWindow ? '_blank' : ''}
            >
              {children}
            </a>
          );
        } else {
          return (
            <Link to={pageUrlObj ? pageUrlObj.url : '/404'} {...args}>
              {children}
            </Link>
          );
        }
      }}
    </ComposedQuery>
  );
};

export default ComposerLink;