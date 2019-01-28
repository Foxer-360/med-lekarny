import * as React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Media from '@source/partials/Media';

interface Slide {
  image: LooseObject;
  title: string;
}

export interface CarouselProps {
  data: {
    slides: Slide[];
  };
}

export interface CarouselState {
  currentIndex: number;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }
  
  public render() {
    const { slides } = this.props.data;
    
    return (
      <div className={'carousel'}>
        <div className={'carousel__images'}>
          <AliceCarousel 
            infinite={true} 
            autoPlay={true} 
            dotsDisabled={true}
            buttonsDisabled={true}
            autoPlayInterval={5000}
            stopAutoPlayOnHover={true}
            stagePadding={{paddingLeft: 0, paddingRight: 0}}
          >
            {slides && slides.map((slide, i) => {
              return slide.image ? <Media key={i} type={'image'} data={slide.image} /> : '';
            })}
          </AliceCarousel>
        </div>
        <div className={'carousel__titles'}>
          <ul>
            {slides && slides.map((slide, i) => (
              <li key={i} className={i === 0 ? 'carousel__titles__title--active' : ''}>
                {slide.title && slide.title}
              </li>
            ))}
          </ul>
        </div>
        <br style={{ clear: 'both'}} />
      </div>
    );
  }
}

export default Carousel;