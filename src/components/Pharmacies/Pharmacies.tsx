import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Media from '@source/partials/Media';
import List from '../List';

interface Pharmacie {
  image: LooseObject;
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
                  {pharmacie.image && <Media type={'image'} data={pharmacie.image} />}
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