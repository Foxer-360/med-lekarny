import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';

interface Pharmacie {
  text: string;
  title: string;
  address: string;
  image?: LooseObject;
  addressUrl?: LooseObject;
  pharmacieUrl?: LooseObject;
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
                <img 
                  alt={'divider image'}
                  src={'/assets/mediconLekarny/images/pharmacies-divider-ad.png'} 
                />
              </div>
              <div>
                <img 
                  alt={'divider image'}
                  src={'/assets/mediconLekarny/images/pharmacies-divider.png'} 
                />
              </div>
              <div>
                <img 
                  alt={'divider image'}
                  src={'/assets/mediconLekarny/images/pharmacies-divider-ad.png'} 
                />
              </div>
              <br style={{ clear: 'both'}} />
            </div>

            <div className={'pharmacies__list row'}>
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
                  <div key={i} className={'pharmacies__list__item col-12 col-md-6 col-xl-3'}>
                    {image &&
                      <Link {...pharmacieUrl}>
                        <Media type={'image'} data={image} />
                      </Link>}

                    {title && <ReactMarkdown source={title} />}

                    <Link {...addressUrl}>
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