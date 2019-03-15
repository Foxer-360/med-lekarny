import * as React from 'react';
import Responsive from 'react-responsive';

import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import Slider from '@source/partials/Slider';
import splitArray from '@source/helpers/splitArray';

interface Item {
  image: LooseObject;
  url: LooseObject;
}

export interface PromotionsAndDiscountsProps {
  data: {
    title?: string;
    items: Item[];
  };
}

const Mobile = props => <Responsive {...props} maxWidth={576} />;
const Tablet = props => <Responsive {...props} minWidth={577} maxWidth={991} />;
const Default = props => <Responsive {...props} minWidth={992} />;

const PromotionsAndDiscounts = (props: PromotionsAndDiscountsProps) => {
  
  return (
    <List data={props.data.items || []}>
      {({ data: items }) => {
      
        const arrayOfSlides = (items && items.map((slide, i) => (
          <div key={i} className={'prom-and-disc__list__item'}>
            <Link url={slide.url && slide.url.url}>
              {slide.image && <Media type={'image'} data={slide.image} />}
            </Link>
          </div>
        ))) || [];
      
        let arrayOfDesktopSlides = [];
        let arrayOfTabletSlides = [];
        let arrayOfMobiletSlides = [];
      
        arrayOfDesktopSlides = splitArray(arrayOfSlides, 3, 'prom-and-disc__list');
        arrayOfTabletSlides = splitArray(arrayOfSlides, 2, 'prom-and-disc__list');
        arrayOfMobiletSlides = splitArray(arrayOfSlides, 1, 'prom-and-disc__list');

        return (
          <div className={'prom-and-disc'}>
            <div className="container">
              {props.data.title && <h3>{props.data.title}</h3> || <div style={{ height: 50 }}/>}
              <Default>
                <Slider 
                  delay={7000}
                  showDots={false}
                  slides={arrayOfDesktopSlides}
                  autoplay={arrayOfSlides.length > 3 ? true : false}
                  showArrows={arrayOfSlides.length > 3 ? true : false}
                />
              </Default>
              <Tablet>
                <Slider 
                  delay={7000}
                  showDots={false}
                  slides={arrayOfTabletSlides}
                  autoplay={arrayOfSlides.length > 2 ? true : false}
                  showArrows={arrayOfSlides.length > 2 ? true : false}
                />
              </Tablet>
              <Mobile>
                <Slider 
                  delay={7000}
                  showDots={false}
                  slides={arrayOfMobiletSlides}
                  autoplay={arrayOfSlides.length > 1 ? true : false}
                  showArrows={arrayOfSlides.length > 1 ? true : false}
                />
              </Mobile>
            </div>
          </div>
        );
      }}
    </List>
  );
};

export default PromotionsAndDiscounts;