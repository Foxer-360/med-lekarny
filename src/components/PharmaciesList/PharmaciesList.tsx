import * as React from 'react';
import PcTitle from './components/title';
import Button from '../../partials/Button';
import Media from '../../partials/Media';
import ReactMarkdown from 'react-markdown';

interface Pharmacie {
  name: string;
  image: LooseObject;
  description: string;
  address: string;
  district: string;
  phone: string;
  transport: string;
  transportImage: LooseObject;
  station: string;
  services: string;
}

export interface PharmaciesListProps {
  data: {
    pharmacies: Pharmacie[];
  };
}

const PharmaciesList = (props: PharmaciesListProps) => {
  const { pharmacies } = props.data;

  return (
    <section className="polyclinicsList">
      {pharmacies &&
        pharmacies.map((pharmacie, index) => (
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
                        <img src="../../../assets/medicon/images/geoIcon.svg" alt="Medicon GeoLocation Icon" />

                        <p>
                          {pharmacie.address && pharmacie.address} <br />
                          {pharmacie.district && pharmacie.district}
                        </p>
                      </div>

                      <div className="pcitem__info__details__item">
                        <img src="../../../assets/medicon/images/phoneIcon.svg" alt="Medicon Phone Icon" />
                        <p>{pharmacie.phone && pharmacie.phone}</p>
                      </div>

                      <div className="pcitem__info__details__item">
                        {pharmacie.transportImage && <Media data={pharmacie.transportImage} type="image" />}

                        {!pharmacie.transportImage && 
                          <img src="../../../assets/medicon/images/metro.svg" alt="" />
                        }

                        <p>
                          {pharmacie.transport && pharmacie.transport}
                          <br />
                          {pharmacie.station && pharmacie.station}
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
                      <Button classes="btn btn--greenBorder">vice info</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default PharmaciesList;