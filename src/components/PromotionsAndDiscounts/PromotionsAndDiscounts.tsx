import * as React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';

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

const PromotionsAndDiscounts = (props: PromotionsAndDiscountsProps) => {
  const { title, items } = props.data;

  const responsive = {
    400: { items: 1 }, 600: { items: 2 }, 1024: { items: 3 }
  };
  
  let autoPlay = false;
  if (items.length > 3) {
    autoPlay = true;
  }

  return (
    <div className={'prom-and-disc'}>
      <div className="container">
        {title && <h3>{title}</h3> || <div style={{ height: 50 }}/>}

        <AliceCarousel  
          responsive={responsive}
          dotsDisabled={true}
          autoPlay={autoPlay}
          autoPlayInterval={6000}
          stopAutoPlayOnHover={true}
        >
          {items && items.map((item, i) => {
            return (
              <div key={i} className={'prom-and-disc__item'}>
                <Link src={item.url && item.url.url}>
                  {item.image && <Media type={'image'} data={item.image} />}
                </Link>
              </div>
            );
          })}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default PromotionsAndDiscounts;