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
              {data && data.map((pharmacie, i) => {
                const {
                  text,
                  image,
                  title,
                  address,
                  addressUrl,
                  pharmacieUrl,
                } = pharmacie;
                
                return (                  
                  <div key={i} className={'pharmacies__list__item'}>
                    {image && 
                      <Link 
                        url={pharmacieUrl && pharmacieUrl.url}
                        pageId={pharmacieUrl && pharmacieUrl.pageId}
                        urlNewWindow={pharmacieUrl && pharmacieUrl.urlNewWindow}
                      >
                        <Media type={'image'} data={image} />
                      </Link>}

                    {title && <ReactMarkdown source={title} />}

                    <Link 
                      url={addressUrl && addressUrl.url}
                      pageId={addressUrl && addressUrl.pageId}
                      urlNewWindow={addressUrl && addressUrl.urlNewWindow}
                    >
                      {address}
                    </Link>

                    {text && <ReactMarkdown source={text} />}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </List>
  );
};

export default Pharmacies;