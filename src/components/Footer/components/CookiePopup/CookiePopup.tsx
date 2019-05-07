import * as React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookiePopup = ({ lang }) => {

  function renderBanner () {
    return (
      <div className={`cookiePopup`}>
        <img src="/assets/mediconLekarny/images/cookie.svg" alt="cookies"/>
        <p>
          {lang === 'cs' 
            ? 'Tento web používá soubory cookie k analýze návštěvnosti a měření reklam.' 
            : 'This website uses cookies to ensure you get the best experience on our website.'}{' '}
          <a href={'https://cookiesandyou.com/'} target={'_blank'}>
            {lang === 'cs' 
              ? 'Další informace o tom, jak používáme soubory cookie'
              : 'Learn more'}
          </a>
        </p>
      </div>
    );
  }

  return (
    <CookieConsent
      expires={365}
      location={'bottom'}
      cookieName={'MediconLekarnyCookies'}
      acceptOnScroll={false}
      buttonText={lang === 'cs' ? 'OK' : 'Got it!'}
      acceptOnScrollPercentage={100}
      style={{ background: '#efefef', color: '#3c3c3b' }}
      buttonStyle={{ background: '#3eac49', color: '#ffffff', fontSize: '13px' }}
    >
      {renderBanner()}
    </CookieConsent>
  );
};

export default CookiePopup;
