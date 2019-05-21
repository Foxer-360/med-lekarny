import * as React from 'react';
import Slider from 'react-slick';

import List from '../List';
import Link from '../../partials/Link';

interface PromotionPreview {
  date: string;
  title: string;
  titleUrl: string;
  description: string;
  url?: LooseObject;
}

export interface PromotionPreviewsProps {
  data: {
    promotionPreviews: PromotionPreview[];
  };
}

const PromotionPreviews = (props: PromotionPreviewsProps) => {

  return (
    <List data={props.data.promotionPreviews || []}>
      {({ data: promotionPreviews }) => {

        const arrayOfSlides = (promotionPreviews && promotionPreviews.map((slide, i) => (
          <div key={i}>
            <div className={'promotion-previews__list__item row'}>
              
              <div className={'promotion-previews__list__item__left col-4 col-sm-3 col-md-4 col-lg-3 col-xl-4'}>
                <p className={'promotion-previews__list__item__left__date'}>
                  {slide.date}
                </p>
              </div>

              <div className={'promotion-previews__list__item__right col-8 col-sm-9 col-md-8 col-lg-9 col-xl-8'}>
                <div className={'promotion-previews__list__item__right__wrapper'}>
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

            </div>
          </div>
        ))) || [];
      
        var settings = {
          speed: 3000,
          dots: false,
          arrows: false,
          autoplay: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          pauseOnHover: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: { slidesToShow: 2 }
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1 }
            }
          ]
        };

        return (
          <div className={'promotions'}>
            <div className={'container'}>
              <Slider {...settings}>
                {arrayOfSlides}
              </Slider>
            </div>
          </div>
        ); 
      }}
    </List>
  );
};

export default PromotionPreviews;