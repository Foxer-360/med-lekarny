import * as React from 'react';
import Slider from 'react-slick';

import List from '../List';
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
  
  return (
    <List data={props.data.items || []}>
      {({ data: items }) => {
      
        const arrayOfSlides = (items && items.map((slide, i) => (
          <div key={i}>
            <Link {...slide.url}>
              {slide.image && <Media type={'image'} data={slide.image} />}
            </Link>
          </div>
        ))) || [];
      
        var settings = {
          infinite: true,
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
          pauseOnHover: true,
          arrows: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: { slidesToShow: 2 }
            },
            {
              breakpoint: 600,
              settings: { slidesToShow: 1 }
            }
          ]
        };

        return (
          <div className={'prom-and-disc'}>
            <div className="container">
              {props.data.title && <h3>{props.data.title}</h3> || <div style={{ height: 50 }}/>}
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

export default PromotionsAndDiscounts;