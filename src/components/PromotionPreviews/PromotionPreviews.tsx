import * as React from 'react';
import Link from '@source/partials/Link';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface PromotionPreview {
  title: string;
  description: string;
  date: string;
  titleURL: string;
  url: LooseObject;
}

export interface PromotionPreviewsProps {
  data: {
    promotionPreviews: PromotionPreview[];
  };
}

const PromotionPreviews = (props: PromotionPreviewsProps) => {
  const { promotionPreviews } = props.data;
  const responsive = {
    800: { items: 1 }, 900: { items: 2 }, 1024: { items: 3 }
  };
  
  let autoPlay = false;
  if (promotionPreviews.length > 3) {
    autoPlay = true;
  }

  return (
    <div className={'promotions'}>
      <div className={'container'}>
        <AliceCarousel  
          responsive={responsive} 
          dotsDisabled={true} 
          buttonsDisabled={true}
          autoPlay={autoPlay}
          infinite={true}
          mouseDragEnabled={true}
          autoPlayInterval={6000}
          stopAutoPlayOnHover={true}
          stagePadding={{paddingLeft: 0, paddingRight: 0}}
        >
          {promotionPreviews && promotionPreviews.map((item, i) => {
            return (
              <div key={i} className={'promotion-previews__item grid'}>
                <div className={'promotion-previews__item__left'}>
                  <p className={'promotion-previews__item__left__date'}>
                    {item.date && item.date}
                  </p>
                </div>
                <div className={'promotion-previews__item__right'}>
                  <p className={'promotion-previews__item__right__title'}>
                    {item.title && item.title}
                  </p>
                  <p className={'promotion-previews__item__right__description'}>
                    {item.description && item.description}
                  </p>
                  <Link 
                    url={item.url && item.url}
                    className={'promotion-previews__item__right__url'}
                  >
                    {item.titleURL && item.titleURL}
                  </Link>
                </div>
              </div> 
            );
          })}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default PromotionPreviews;