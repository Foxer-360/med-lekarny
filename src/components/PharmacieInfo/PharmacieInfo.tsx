import * as React from 'react';

import Link from '@source/partials/Link';
import Media from '@source/partials/Media';

export interface PharmacieInfoProps {
  data: {
    geo: string;
    geoUrl: LooseObject;
    phone: string;
    officeHours: string;
    transport: string;
    transportImage: LooseObject;
  };
}

const PharmacieInfo = (props: PharmacieInfoProps) => {
  const { geo, geoUrl, phone, transport, transportImage, officeHours } = props.data;
  
  return (
    <div className={'pharmacie-info'}>
      <div className={'container'}>
        <div className={'pharmacie-info__top-divider'} />
        <div className={'pharmacie-info__content'}>
          <div className={'pharmacie-info__content__item'}>
            <img src={'/assets/mediconLekarny/images/phoneIcon.svg'} alt="phone nubmer"/>
            {phone && <a href={`tel:${phone}`}>{phone}</a>}
          </div>
          <div className={'pharmacie-info__content__item'}>
            <img src={'/assets/mediconLekarny/images/geoIcon.svg'} alt="address"/>
            <Link urlNewWindow={true} url={geoUrl && geoUrl.url}>{geo}</Link>
          </div>
          <div className={'pharmacie-info__content__item'}>
            <img src={'/assets/mediconLekarny/images/officeHours.svg'} alt="office hours"/>
            <p>{officeHours}</p>
          </div>
          <div className={'pharmacie-info__content__item'}>
            {(transportImage && <Media type={'image'} data={transportImage} />) || (
              <img src={'/assets/mediconLekarny/images/metro.svg'} alt="metro"/>
            )}
            <p>{transport}</p>
          </div>
        </div>
        <div className={'pharmacie-info__bottom-divider'} />
      </div>
    </div>
  );
};

export default PharmacieInfo;