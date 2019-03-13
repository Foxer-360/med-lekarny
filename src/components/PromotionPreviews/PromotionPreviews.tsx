import * as React from 'react';
import Responsive from 'react-responsive';

import List from '../List';
import Link from '@source/partials/Link';
import Slider from '@source/partials/Slider';

interface PromotionPreview {
  title: string;
  description: string;
  date: string;
  titleUrl: string;
  url: LooseObject;
}

export interface PromotionPreviewsProps {
  data: {
    promotionPreviews: PromotionPreview[];
  };
}

const Mobile = props => <Responsive {...props} minWidth={0} maxWidth={768} />;
const Tablet = props => <Responsive {...props} minWidth={769} maxWidth={1249} />;
const Default = props => <Responsive {...props} minWidth={1250} />;

const PromotionPreviews = (props: PromotionPreviewsProps) => {
  const { promotionPreviews } = props.data;
  
  const splitArray = (array, size) => {
    let result = [];
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      result[i] = (
        <div className={'promotion-previews__list'}>
          {array.slice((i * size), (i * size) + size)}
        </div>
      );
    }
    return result;
  };

  let autoPlay = false;
  if (promotionPreviews.length > 3) {
    autoPlay = true;
  }

  let arrayOfSlides = promotionPreviews && promotionPreviews.map((slide, i) => (
    <div key={i} className={'promotion-previews__list__item grid'}>
      <div className={'promotion-previews__list__item__left'}>
        <p className={'promotion-previews__list__item__left__date'}>
          {slide.date && slide.date}
        </p>
      </div>
      <div className={'promotion-previews__list__item__right'}>
        <p className={'promotion-previews__list__item__right__title'}>
          {slide.title && slide.title}
        </p>
        <p className={'promotion-previews__list__item__right__description'}>
          {slide.description && slide.description}
        </p>
        <Link 
          url={slide.url && slide.url.url}
          className={'promotion-previews__list__item__right__url'}
        >
          {slide.titleUrl && slide.titleUrl}
        </Link>
      </div>
    </div>
  ));

  let arrayOfDesktopSlides = [];
  let arrayOfTabletSlides = [];
  let arrayOfMobiletSlides = [];

  if (promotionPreviews.length >= 3) {
    // Split an array of 3 elements
    arrayOfDesktopSlides = splitArray(arrayOfSlides, 3);
  }
  if (promotionPreviews.length > 2) {
    arrayOfTabletSlides = splitArray(arrayOfSlides, 2);
  }
  if (promotionPreviews.length > 1) {
    arrayOfMobiletSlides = splitArray(arrayOfSlides, 1);
  }

  return (
    <List data={{}}>
      {({ data }) => (
        <div className={'promotions'}>
          <div className={'container'}>
          <Default>
            <Slider 
              autoplay={autoPlay}
              showArrows={false}
              delay={7000}
              showDots={false}
              slides={arrayOfDesktopSlides}
            />
          </Default>
          <Tablet>
            <Slider 
              autoplay={autoPlay}
              showArrows={false}
              delay={7000}
              showDots={false}
              slides={arrayOfTabletSlides}
            />
          </Tablet>
          <Mobile>
            <Slider 
              autoplay={autoPlay}
              showArrows={false}
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

export default PromotionPreviews;