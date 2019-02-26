import * as React from 'react';
import Social from './components/Social';
import HelpPopup from './components/HelpPopup';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import Link from '../../partials/Link';
import Loader from '@source/partials/Loader';

const GET_CONTEXT = gql`
  {
    languageData @client
    pageData @client
    websiteData @client
    languagesData @client
    navigationsData @client
  }
`;

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

const ComposedQuery = adopt({
  context: ({ render }) => <Query query={GET_CONTEXT}>{({ data }) => render(data)}</Query>,
  getPagesUrls: ({ render, context: { languageData } }) => {
    if (!languageData) {
      return render({});
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

interface Icon {
  title: string;
  url: LooseObject;
}

export interface FooterProps {
  data: {
    icons: Icon[];
    copyrights: string;
    gdprText: string;
    gdprUrl: LooseObject;
  };
}

export interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
  }

  public render() {
    const {
      icons, 
      copyrights,
      gdprText,
      gdprUrl
    } = this.props.data;

    return (
      <ComposedQuery>
        {({ getPagesUrls: { loading, error, data }, context }) => {
          if (
            !context.navigationsData || 
            !context.languageData || 
            !context.languagesData || 
            !data || 
            !data.pagesUrls
          ) {
            return <Loader />;
          }

          if (error) {
            return `Error...${error}`;
          }

          const {
            navigationsData: navigations,
            languageData: { code: languageCode },
          } = context;

          const transformedNavigations = this.transformNavigationsIntoTree(navigations, data.pagesUrls);

          const bottomNav = 'bottom';

          const bottomNavItems =
            transformedNavigations && transformedNavigations[bottomNav] ? transformedNavigations[bottomNav] : [];

          return (
            <footer style={{ position: 'relative', width: '100%', bottom: '0' }}>
              <HelpPopup />
              <div className={'footer'}>
                <div className={'container'}>
                  <div>
                    <ul className={'footer__list'}>
                      {bottomNavItems && bottomNavItems.map((navItem, i) => (
                        <li key={i}>
                          <Link to={navItem.url ? navItem.url : ''}>{navItem.name || navItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                    <Social icons={icons} />
                  </div>
                </div>
                <div className={'footer__left'}/>
                <div className={'footer__right'}/>
              </div>
              
              <div className="bottom">
                <div className="container">
                  <div className="bottom__copyrights grid">
                    <p>{copyrights && copyrights}</p>
                    <Link url={gdprUrl && gdprUrl.url} >
                      {gdprText && gdprText}
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          );
        }}
      </ComposedQuery>
    );
  }

  private transformNavigationsIntoTree(navigation: LooseObject[], urls: LooseObject[]): LooseObject | null {
    const tree = {};
    if (!navigation || navigation.length < 1) {
      return null;
    }
    navigation.forEach((nav: LooseObject) => {
      tree[nav.name] = this.buildNavTree(nav.nodes, null, urls);
    });
    return tree;
  }
  private buildNavTree(nav: LooseObject[], parent: string | null, urls: LooseObject[]): LooseObject[] {
    const res = [] as LooseObject[];
    nav.forEach((node: LooseObject) => {
      if (node.parent === parent) {
        const url = urls.find((u: LooseObject) => u.page === node.page);
        const item = {
          ...node,
          ...url,
        } as LooseObject;
        if (node.page) {
          const children = this.buildNavTree(nav, node.page, urls);
          if (children && children.length > 0) {
            item.children = children;
          }
        }
        if (node.title && node.link) {
          item.url = node.link;
        }
        res.push(item);
      }
    });
    res.sort((a: LooseObject, b: LooseObject) => a.order - b.order);
    return res;
  }
}

export default Footer;