import * as React from 'react';
import Media from '@source/partials/Media';

export interface PharmacieInfoProps {
  data: {
    geo: string;
    phone: string;
    officeHours: string;
    transport: string;
    transportImage: LooseObject;
  };
}

const PharmacieInfo = (props: PharmacieInfoProps) => {
  const { geo, phone, transport, transportImage, officeHours } = props.data;
  
  return (
    <div className={'pharmacie-info'}>
      <div className={'container'}>
        <div className={'pharmacie-info__top-divider'} />
        <div className={'pharmacie-info__content'}>
          <div className={'pharmacie-info__content__item'}>
            <img src={'/assets/medicon/images/phoneIcon.svg'} alt="phone nubmer"/>
            {phone && <p>{phone}</p>}
          </div>
          <div className={'pharmacie-info__content__item'}>
            <img src={'/assets/medicon/images/geoIcon.svg'} alt="address"/>
            {geo && <p>{geo}</p>}
          </div>
          <div className={'pharmacie-info__content__item'}>
            <img src={'/assets/medicon/images/officeHours.svg'} alt="office hours"/>
            {officeHours && <p>{officeHours}</p>}
          </div>
          <div className={'pharmacie-info__content__item'}>
            {(transportImage && <Media type={'image'} data={transportImage} />) || (
              <img src={'/assets/medicon/images/metro.svg'} alt="metro"/>
            )}
            {transport && <p>{transport}</p>}
          </div>
        </div>
        <div className={'pharmacie-info__bottom-divider'} />
      </div>
    </div>
  );
};

export default PharmacieInfo;