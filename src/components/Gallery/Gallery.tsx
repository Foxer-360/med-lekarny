import * as React from 'react';
import Responsive from 'react-responsive';

import List from '../List';
import Media from '@source/partials/Media';
import Slider from '@source/partials/Slider';

interface Slide {
  image: LooseObject;
}

export interface GalleryProps {
  data: {
    slides: Slide[];
  };
}

const Mobile = props => <Responsive {...props} maxWidth={576} />;
const Tablet = props => <Responsive {...props} minWidth={577} maxWidth={991} />;
const Default = props => <Responsive {...props} minWidth={992} />;

const Gallery = (props: GalleryProps) => {
  const { slides } = props.data;
  
  const splitArray = (array, size) => {
    let result = [];
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      result[i] = (
        <div className={'gallery__list'}>
          {array.slice((i * size), (i * size) + size)}
        </div>
      );
    }
    return result;
  };

  let autoPlay = false;
  if (slides.length > 4) {
    autoPlay = true;
  }

  let arrayOfSlides = slides && slides.map((slide, i) => (
    <div className={'gallery__list__item'} key={i}>
      {slide.image && <Media type={'image'} data={slide.image} />}
    </div>
  ));

  let arrayOfDesktopSlides = [];
  let arrayOfTabletSlides = [];
  let arrayOfMobiletSlides = [];

  if (slides.length > 4) {
    // Split an array of 4 elements
    arrayOfDesktopSlides = splitArray(arrayOfSlides, 4);
  }
  if (slides.length > 2) {
    arrayOfTabletSlides = splitArray(arrayOfSlides, 2);
  }
  if (slides.length > 1) {
    arrayOfMobiletSlides = splitArray(arrayOfSlides, 1);
    console.log(arrayOfMobiletSlides);
  }

  return (
    <List data={{}}>
      {({ data }) => (
        <div className={'gallery'}>
          <div className={'container'}>
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

export default Gallery;