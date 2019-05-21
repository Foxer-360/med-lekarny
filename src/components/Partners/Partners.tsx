import * as React from 'react';

import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';

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
    <List data={partners}>
      {({ data }) => (
        <div className={'partners'}>
          <div className="container">
            <div className={'partners__divider'} />
            
            {title && <h3>{title}</h3>}
    
            <div className={'partners__list row'}>
              {data && data.map((partner, i) => {
                return (
                  <Link 
                    key={i}
                    className={'col-xs'}
                    {...partner.url}
                  >
                    {partner.image && 
                      <Media type={'image'} data={partner.image} />}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </List>
  );
};

export default Partners;