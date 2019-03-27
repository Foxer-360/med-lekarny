import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';

interface Pharmacie {
  image?: LooseObject;
  pharmacieUrl?: LooseObject;
  address: string;
  addressUrl?: LooseObject;
  title: string;
  text: string;
}

export interface PharmaciesProps {
  data: {
    pharmacies: Pharmacie[];
  };
}

const Pharmacies = (props: PharmaciesProps) => {
  const { pharmacies } = props.data;

  return (
    <List data={pharmacies}>
      {({ data }) => (
        <section className={'pharmacies'}>
          <div className={'container'}>
            <div className={'pharmacies__divider'}>
              <div>
                <img src={'/assets/mediconLekarny/images/pharmacies-divider-ad.png'} />
              </div>          
              <div>
                <img src={'/assets/mediconLekarny/images/pharmacies-divider.png'} />
              </div>
              <div>
                <img src={'/assets/mediconLekarny/images/pharmacies-divider-ad.png'} />
              </div>
              <br style={{ clear: 'both'}} />
            </div>
            
            <div className={'pharmacies__list grid'}>
              {data && data.map((pharmacie, i) => (
                <div key={i} className={'pharmacies__list__item'}>
                    {pharmacie.image && 
                      <Link url={pharmacie.pharmacieUrl && pharmacie.pharmacieUrl.url}>
                        <Media type={'image'} data={pharmacie.image} />
                      </Link>}
                    {pharmacie.title && <ReactMarkdown source={pharmacie.title} />}
                    <Link urlNewWindow={true} url={pharmacie.addressUrl && pharmacie.addressUrl.url}>
                      {pharmacie.address && pharmacie.address}
                    </Link>
                    {pharmacie.text && <ReactMarkdown source={pharmacie.text} />}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </List>
  );
};

export default Pharmacies;