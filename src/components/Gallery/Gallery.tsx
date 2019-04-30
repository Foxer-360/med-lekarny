import * as React from 'react';
import Responsive from 'react-responsive';

import List from '../List';
import Media from '@source/partials/Media';
import Slider from '@source/partials/Slider';
import splitArray from '@source/helpers/splitArray';

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

  return (
    <List data={props.data.slides || []}>
      {({ data: slides }) => {
      
        let arrayOfSlides = (slides && slides.map((slide, i) => (
          <div className={'gallery__list__item'} key={i}>
            {slide.image && <Media type={'image'} data={slide.image} />}
          </div>
        ))) || [];
      
        let arrayOfDesktopSlides = [];
        let arrayOfTabletSlides = [];
        let arrayOfMobiletSlides = [];
      
        arrayOfDesktopSlides = splitArray(arrayOfSlides, 4, 'gallery__list');
        arrayOfTabletSlides = splitArray(arrayOfSlides, 2, 'gallery__list');
        arrayOfMobiletSlides = splitArray(arrayOfSlides, 1, 'gallery__list');

        return (
          <div className={'gallery'}>
            <div className={'container'}>
              <Default>
                <Slider 
                  delay={7000}
                  showDots={false}
                  slides={arrayOfDesktopSlides}
                  autoplay={arrayOfSlides.length > 4 ? true : false}
                  showArrows={arrayOfSlides.length > 4 ? true : false}
                />
              </Default>
              <Tablet>
                <Slider 
                  delay={7000}
                  showDots={false}
                  slides={arrayOfTabletSlides}
                  autoplay={arrayOfSlides.length > 2 ? true : false}
                  showArrows={arrayOfSlides.length > 2 ? true : false}
                />
              </Tablet>
              <Mobile>
                <Slider 
                  delay={7000}
                  showDots={false}
                  slides={arrayOfMobiletSlides}
                  autoplay={arrayOfSlides.length > 1 ? true : false}
                  showArrows={arrayOfSlides.length > 1 ? true : false}
                />
              </Mobile>
            </div>
          </div>
        );
      }}
    </List>
  );
};

export default Gallery;