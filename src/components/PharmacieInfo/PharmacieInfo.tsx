import * as React from 'react';

import Link from '../../partials/Link';
import Media from '../../partials/Media';
import * as ReactMarkdown from 'react-markdown/with-html';

export interface PharmacieInfoProps {
  data: {
    geo: string;
    geoUrl: LooseObject;
    emailAddress: string;
    phone: string;
    officeHours: string;
    transport: string;
    transportImage: LooseObject;
  };
}

const PharmacieInfo = (props: PharmacieInfoProps) => {
  const { geo, geoUrl, emailAddress, phone, transport, transportImage, officeHours } = props.data;
  
  return (
    <div className={'pharmacie-info'}>
      <div className={'container'}>
        <div className={'pharmacie-info__top-divider'} />

        <div className={'pharmacie-info__content row'}>
          {phone && <div className={'pharmacie-info__content__item col-sm-12 col-md-6 col-xl-3'}>
            <img src={'/assets/mediconLekarny/images/phoneIcon.svg'} alt="phone nubmer"/>
            {phone && <a className="phone" href={`tel:${phone}`}>{phone}</a>}
          </div>}
          {geo && geo.trim().length > 0
          && <div className={'pharmacie-info__content__item col-sm-12 col-md-6 col-xl-3'}>
            <img src={'/assets/mediconLekarny/images/geoIcon.svg'} alt="address"/>
            <Link {...geoUrl}>{geo}</Link>
          </div>}
          {emailAddress && emailAddress.trim().length > 0
          && <div className={'pharmacie-info__content__item col-sm-12 col-md-6 col-xl-3'}>
            <img src={'/assets/mediconLekarny/images/emailIcon.jpg'} alt="email" height="50" width="50"/>
            <ReactMarkdown
              skipHtml={false}
              escapeHtml={false}
              source={emailAddress}
            />
          </div>}
          {officeHours && <div className={'pharmacie-info__content__item col-sm-12 col-md-6 col-xl-3'}>
            <img src={'/assets/mediconLekarny/images/officeHours.svg'} alt="office hours"/>
            <p>{officeHours}</p>
          </div>}
          {transport && <div className={'pharmacie-info__content__item col-sm-12 col-md-6 col-xl-3'}>
            {(transportImage && <Media type={'image'} data={transportImage} />) || (
              <img src={'/assets/mediconLekarny/images/metro.svg'} alt="metro"/>
            )}
            <p>{transport}</p>
          </div>}
        </div>

        <div className={'pharmacie-info__bottom-divider'} />
      </div>
    </div>
  );
};

export default PharmacieInfo;