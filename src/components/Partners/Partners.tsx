import * as React from 'react';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';

interface Partner {
  image: LooseObject;
  url: LooseObject;
}

export interface PartnersProps {
  data: {
    title: string;
    partners: Partner[];
  };
}

const Partners = (props: PartnersProps) => {
  const { title, partners } = props.data;
  
  return (
    <div className={'partners'}>
      <div className="container">
        <div className={'partners__divider'} />
        
        {title && <h3>{title}</h3>}

        <div className={'partners__list grid'}>
          {partners && partners.map((partner, i) => {
            return (
              <Link key={i} src={partner.url && partner.url.url}>
                {partner.image && <Media type={'image'} data={partner.image} />}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;