import * as React from 'react';
import Responsive from 'react-responsive';

import List from '../List';
import Link from '@source/partials/Link';
import Slider from '@source/partials/Slider';
import splitArray from '@source/helpers/splitArray';

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

  return (
    <List data={props.data.promotionPreviews || []}>
      {({ data: promotionPreviews }) => {

        const arrayOfSlides = (promotionPreviews && promotionPreviews.map((slide, i) => (
          <div key={i} className={'promotion-previews__list__item grid'}>
            <div className={'promotion-previews__list__item__left'}>
              <p className={'promotion-previews__list__item__left__date'}>
                {slide.date}
              </p>
            </div>
            <div className={'promotion-previews__list__item__right'}>
              <p className={'promotion-previews__list__item__right__title'}>
                {slide.title}
              </p>
              <p className={'promotion-previews__list__item__right__description'}>
                {slide.description}
              </p>
              <Link 
                {...slide.url}
                className={'promotion-previews__list__item__right__url'}
              >
                {slide.titleUrl}
              </Link>
            </div>
          </div>
        ))) || [];

        let arrayOfDesktopSlides = [];
        let arrayOfTabletSlides = [];
        let arrayOfMobiletSlides = [];

        arrayOfDesktopSlides = splitArray(arrayOfSlides, 3, 'promotion-previews__list');
        arrayOfTabletSlides = splitArray(arrayOfSlides, 2, 'promotion-previews__list');
        arrayOfMobiletSlides = splitArray(arrayOfSlides, 1, 'promotion-previews__list');

        return (
          <div className={'promotions'}>
            <div className={'container'}>
            <Default>
              <Slider 
                delay={7000}
                showDots={false}
                showArrows={false}
                slides={arrayOfDesktopSlides}
                autoplay={arrayOfSlides.length > 3 ? true : false}
              />
            </Default>
            <Tablet>
              <Slider 
                showArrows={false}
                delay={7000}
                showDots={false}
                slides={arrayOfTabletSlides}
                autoplay={arrayOfSlides.length > 2 ? true : false}
              />
            </Tablet>
            <Mobile>
              <Slider 
                delay={7000}
                showDots={false}
                showArrows={false}
                slides={arrayOfMobiletSlides}
                autoplay={arrayOfSlides.length > 1 ? true : false}
              />
            </Mobile>
            </div>
          </div>
        ); 
      }}
    </List>
  );
};

export default PromotionPreviews;