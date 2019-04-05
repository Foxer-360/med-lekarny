import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import List from '../List';
import Link from '@source/partials/Link';
import PcTitle from './components/title';
import Media from '@source//partials/Media';
import Button from '@source//partials/Button';

interface Pharmacie {
  name: string;
  image?: LooseObject;
  description: string;
  address: string;
  addressUrl?: LooseObject;
  district: string;
  phone: string;
  transport: string;
  transportImage?: LooseObject;
  station: string;
  services: string;
  url?: LooseObject;
}

export interface PharmaciesListProps {
  data: {
    pharmacies: Pharmacie[];
  };
}

const PharmaciesList = (props: PharmaciesListProps) => {
  const { pharmacies } = props.data;

  return (
    <List data={pharmacies}>
      {({ data }) => (
        <section className="polyclinicsList">
          {data &&
            data.map((pharmacie, index) => (
              <div className={'pcitem'} key={index}>
                <div className="fullWidthContainer">
                  <div className="container">
                    <div className="pcitem__wrapper">
                      <div className={'pcitem__img'}>
                        {pharmacie.image && <Media data={pharmacie.image} type="image" />}
                      </div>
    
                      <div className={'pcitem__info'}>
                        <PcTitle name={pharmacie.name && pharmacie.name} />
    
                        <div className="pcitem__info__details">
                          <div className="pcitem__info__details__item">
                            <img 
                              src="../../../assets/mediconLekarny/images/geoIcon.svg" 
                              alt="Medicon GeoLocation Icon" 
                            />
    
                            <p>
                              <Link {...pharmacie.addressUrl}>
                                {pharmacie.address && pharmacie.address}
                              </Link> <br />
                              {pharmacie.district}
                            </p>
                          </div>
    
                          <div className="pcitem__info__details__item">
                            <img 
                              src="../../../assets/mediconLekarny/images/phoneIcon.svg" 
                              alt="Medicon Phone Icon" 
                            />
                            {pharmacie.phone && <a href={`tel:${pharmacie.phone}`}>{pharmacie.phone}</a>}
                          </div>
    
                          <div className="pcitem__info__details__item">
                            {pharmacie.transportImage && <Media data={pharmacie.transportImage} type="image" />}
    
                            {!pharmacie.transportImage && 
                              <img src="../../../assets/mediconLekarny/images/metro.svg" alt="" />
                            }
    
                            <p>
                              {pharmacie.transport}
                              <br />
                              {pharmacie.station}
                            </p>
                          </div>
                        </div>
    
                        {pharmacie.services && 
                          <div className={'pcitem__info__list'}>
                            <ReactMarkdown
                              source={pharmacie.services}
                              renderers={{
                                // tslint:disable-next-line:no-any
                                paragraph: (rProps: any) => <ul>{rProps.children}</ul>,
                              }}
                            />
                          </div>
                        }
    
                        {pharmacie.description && 
                          <div className={'pcitem__info__desc'}>
                            <div className={'pcitem__info__desc__txt'}>
                              <ReactMarkdown
                                source={pharmacie.description}
                                renderers={{
                                  // tslint:disable-next-line:no-any
                                  paragraph: (rProps: any) => <p>{rProps.children}</p>,
                                }}
                              />
                            </div>
                          </div>
                        }
    
                        <div className={'pcitem__info__btnHolder'}>
                          <Button url={pharmacie.url} classes="btn btn--greenBorder">vice info</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </section>
      )}
    </List>
  );
};

export default PharmaciesList;