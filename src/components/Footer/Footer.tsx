import * as React from 'react';
import Social from './components/Social';
import HelpPopup from './components/HelpPopup';

class Footer extends React.Component<any, any> {
  public render() {
    return (
      <footer>
        <HelpPopup />
        <div className={'footer'}>
          <div className={'container'}>
            <div>
              <ul className={'footer__list'}>
                <li><a href="#">O nas</a></li>
                <li><a href="#">Kariera</a></li>
                <li><a href="#">Kontakty</a></li>
              </ul>
              <Social />
            </div>
          </div>
          <div className={'footer__left'}/>
          <div className={'footer__right'}/>
        </div>
        
        <div className="bottom">
          <div className="container">
            <div className="bottom__copyrights grid">
              <p>© 2018 - MEDICON a.s.</p>
              <a href="#">
                <p>Prohlášení o ochraně osobních údajů</p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
