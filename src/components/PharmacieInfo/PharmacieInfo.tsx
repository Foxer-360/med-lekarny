import * as React from 'react';

import Link from '../../partials/Link';
import Media from '../../partials/Media';

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

        <div className={'pharmacie-info__content row'}>
          <div className={'pharmacie-info__content__item col-sm-12 col-md-6 col-lg-3'}>
            <img src={'/assets/mediconLekarny/images/phoneIcon.svg'} alt="phone nubmer"/>
            {phone && <a className="phone" href={`tel:${phone}`}>{phone}</a>}
          </div>
          <div className={'pharmacie-info__content__item col-sm-12 col-md-6 col-lg-3'}>
            <img src={'/assets/mediconLekarny/images/geoIcon.svg'} alt="address"/>
            <Link {...geoUrl}>{geo}</Link>
          </div>
          <div className={'pharmacie-info__content__item col-sm-12 col-md-6 col-lg-3'}>
            <img src={'/assets/mediconLekarny/images/officeHours.svg'} alt="office hours"/>
            <p>{officeHours}</p>
          </div>
          <div className={'pharmacie-info__content__item col-sm-12 col-md-6 col-lg-3'}>
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