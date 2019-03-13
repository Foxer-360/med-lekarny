import * as React from 'react';
import Responsive from 'react-responsive';

import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import Slider from '@source/partials/Slider';

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
  const { title, items } = props.data;

  const splitArray = (array, size) => {
    let result = [];
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      result[i] = (
        <div className={'prom-and-disc__list'}>
          {array.slice((i * size), (i * size) + size)}
        </div>
      );
    }
    return result;
  };

  let autoPlay = false;
  if (items.length > 4) {
    autoPlay = true;
  }

  let arrayOfSlides = items && items.map((slide, i) => (
    <div key={i} className={'prom-and-disc__list__item'}>
      <Link url={slide.url && slide.url.url}>
        {slide.image && <Media type={'image'} data={slide.image} />}
      </Link>
    </div>
  ));

  let arrayOfDesktopSlides = [];
  let arrayOfTabletSlides = [];
  let arrayOfMobiletSlides = [];

  if (items.length >= 3) {
    // Split an array of 3 elements
    arrayOfDesktopSlides = splitArray(arrayOfSlides, 3);
  }
  if (items.length > 2) {
    arrayOfTabletSlides = splitArray(arrayOfSlides, 2);
  }
  if (items.length > 1) {
    arrayOfMobiletSlides = splitArray(arrayOfSlides, 1);
  }
  
  return (
    <List data={{}}>
      {({ data }) => (
        <div className={'prom-and-disc'}>
          <div className="container">
            {title && <h3>{title}</h3> || <div style={{ height: 50 }}/>}
            <Default>
              <Slider 
                autoplay={autoPlay}
                showArrows={true}
                delay={7000}
                showDots={false}
                slides={arrayOfDesktopSlides}
              />
            </Default>
            <Tablet>
              <Slider 
                autoplay={autoPlay}
                showArrows={true}
                delay={7000}
                showDots={false}
                slides={arrayOfTabletSlides}
              />
            </Tablet>
            <Mobile>
              <Slider 
                autoplay={autoPlay}
                showArrows={true}
                delay={7000}
                showDots={false}
                slides={arrayOfMobiletSlides}
              />
            </Mobile>
          </div>
        </div>
      )}
    </List>
  );
};

export default PromotionsAndDiscounts;