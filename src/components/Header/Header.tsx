import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { adopt } from 'react-adopt';

import Link from '../../partials/Link';
import Loader from '../../partials/Loader';
import Hamburger from './components/Hamburger';

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
  query pagesUrls($language: ID!, $websiteId: ID!) {
    pagesUrls(where: { language: $language, websiteId: $websiteId }) {
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
  getPagesUrls: ({ render, context: { languageData, websiteData } }) => {
    if (!(languageData && websiteData)) {
      return render({});
    }
    return (
      <Query query={GET_PAGES_URLS} variables={{ language: languageData.id, websiteId: websiteData.id }}>
        {data => {
          return render(data);
        }}
      </Query>
    );
  },
});

export interface HeaderProps {
  navigations?: LooseObject;
  languages?: LooseObject;
  languageCode?: string;
  data: {
    showTriangle: boolean;
    buttonText: string;
    buttonUrl?: LooseObject;
  };
}

export interface HeaderState {
  menuActive: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props: HeaderProps) {
    super(props);
    this.state = { menuActive: false };
  }

  closeMenu = () => {
    this.setState({
      menuActive: false,
    });
  }

  toggleMenu = () => {
    this.setState({
      menuActive: !this.state.menuActive,
    });
  }

  public render() {
    this.state.menuActive ? (document.body.style.position = 'fixed') : (document.body.style.position = 'static');

    return (
      <ComposedQuery>
        {({ getPagesUrls: { loading, error, data }, context }) => {
          if (!context.navigationsData ||
              !context.languageData ||
              !context.languagesData ||
              !data ||
              !data.pagesUrls
            ) { return <Loader />; }

          if (error) { return `Error...${error}`; }

          const {
            navigationsData: navigations,
            languageData: { code: languageCode },
          } = context;

          const transformedNavigations = this.transformNavigationsIntoTree(navigations, data.pagesUrls);

          const mainNav = 'main';
          const topNav = 'top';

          const mainNavItems =
            transformedNavigations && transformedNavigations[mainNav] ? transformedNavigations[mainNav] : [];

          const topNavItems =
            transformedNavigations && transformedNavigations[topNav] ? transformedNavigations[topNav] : [];

          return (
            <header className={`header ${this.state.menuActive ? 'menuActive' : ''}`}>
              <div className={'header__top'}>
                <div style={{ position: 'relative' }} className={'container'}>
                  <ul className={`header__top__list ${this.props.data.buttonText && this.props.data.buttonUrl && this.props.data.buttonUrl.url ? 'button' : 'normal'}`}>
                    {topNavItems && topNavItems.map((navItem, i) => (
                      <li key={i}>
                        <Link {...navItem.url}>
                          {navItem.name || navItem.title}
                        </Link>
                      </li>
                    ))}
                    {(this.props.data.buttonUrl.url && this.props.data.buttonText) &&
                    <li><Link className="top_res_recipe" {...this.props.data.buttonUrl}>
                    {this.props.data.buttonText}
                    <span className="arrow" /></Link></li>}
                  </ul>
                </div>
              </div>
              <div className="container">
                <div className={'header__wrapper'}>
                  <div className={'header__logo'}>
                    <Link
                      url={`${context.websiteData.urlMask === '/' ?
                              '' : context.websiteData.urlMask}/${context.languageData.code}`}
                    >
                      <img
                        src={
                          context.languageData.code === 'cs'
                          ? '/assets/mediconLekarny/images/mediconLekarnyLogo.png'
                          : '/assets/mediconLekarny/images/logo-sr.svg'
                        }
                        alt="Medicon Lekarny Logo"
                      />
                    </Link>
                  </div>
                  <nav>
                    <ul>
                      {mainNavItems &&
                        mainNavItems.map((navItem, i) => (
                          <li key={i}>
                            <Link {...navItem.url}>
                              {navItem.name || navItem.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                    <Hamburger active={this.state.menuActive} onClick={this.toggleMenu} />
                  </nav>
                </div>
              </div>
              {this.props.data.showTriangle && <div className={'header__iso'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon fill="white" points={`0,0 0,5 15,30 80,0`} />
                </svg>
              </div>}

              <div className={`hiddenMenu ${this.state.menuActive ? 'hiddenMenu--active' : ''}`}>
                <div className={'hiddenMenu__wrapper'}>
                  <ul>
                    {mainNavItems &&
                      mainNavItems.map((navItem, i) => (
                        <li key={i}>
                          {
                            <Link {...navItem.url} onClick={() => this.closeMenu()}>
                              {navItem.name || navItem.title}
                            </Link>}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </header>
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

        item.url = {
          url: item.url,
          pageId: item.id,
        };

        res.push(item);
      }
    });

    res.sort((a: LooseObject, b: LooseObject) => a.order - b.order);
    return res;
  }
}

export default Header;
