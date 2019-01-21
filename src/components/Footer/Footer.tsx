import * as React from 'react';
import Social from './components/Social';
import HelpPopup from './components/HelpPopup';
import Link from '@source/partials/Link';

interface Link {
  title: string;
  url: LooseObject;
}

interface Icon {
  title: string;
  url: LooseObject;
}

export interface FooterProps {
  data: {
    links: Link[];
    icons: Icon[];
    copyrights: string;
    gdprText: string;
    gdprUrl: LooseObject;
  };
}

export interface FooterState { }

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
  }

  public render() {
    const { 
      links, 
      icons, 
      copyrights,
      gdprText,
      gdprUrl
    } = this.props.data;

    return (
      <footer>
        <HelpPopup />
        <div className={'footer'}>
          <div className={'container'}>
            <div>
              <ul className={'footer__list'}>
                {links && links.map((link, i) => (
                  <li>
                    <Link key={i} url={link.url && link.url}>
                      {link.title && link.title}
                    </Link>
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
              <Link url={gdprUrl && gdprUrl} >
                {gdprText && gdprText}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;