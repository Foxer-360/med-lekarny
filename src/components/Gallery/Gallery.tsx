import * as React from 'react';
import Slider from 'react-slick';

import List from '../List';
import Media from '../../partials/Media';

interface Slide {
  image: LooseObject;
}

export interface GalleryProps {
  data: {
    slides: Slide[];
  };
}

const Gallery = (props: GalleryProps) => {

  return (
    <List data={props.data.slides || []}>
      {({ data: slides }) => {
      
        const arrayOfSlides = (slides && slides.map((slide, i) => (
          <div key={i}>
            <div className={'gallery__item'}>
              {slide.image && <Media type={'image'} data={slide.image} />}
            </div>
          </div>
        ))) || [];
      
        var settings = {
          speed: 1000,
          dots: false,
          arrows: true,
          autoplay: true,
          infinite: true,         
          slidesToShow: 4,
          slidesToScroll: 1,
          pauseOnHover: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: { slidesToShow: 3 }
            },
            {
              breakpoint: 992,
              settings: { slidesToShow: 2 }
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1 }
            }

          ]
        };

        return (
          <div className={'gallery'}>
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

export default Gallery;