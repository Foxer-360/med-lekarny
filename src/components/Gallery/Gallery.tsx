import * as React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Media from '@source/partials/Media';

interface Slide {
  image: LooseObject;
}

export interface GalleryProps {
  data: {
    slides: Slide[];
  };
}

const Gallery = (props: GalleryProps) => {
  const { slides } = props.data;
  
  const responsive = {
    320: { items: 1 }, 400: { items: 2 }, 700: { items: 3 }, 1024: { items: 4 }
  };
  
  let autoPlay = false;
  if (slides.length > 4) {
    autoPlay = true;
  }

  return (
    <div className={'gallery'}>
      <div className={'container'}>
        <AliceCarousel  
          responsive={responsive}
          dotsDisabled={true}
          autoPlay={autoPlay}
          infinite={true}
          autoPlayInterval={6000}
          stopAutoPlayOnHover={true}
        >
          {slides && slides.map((slide, i) => (
            <div className={'gallery__item'} key={i}>
              {slide.image && <Media type={'image'} data={slide.image} />}
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default Gallery;