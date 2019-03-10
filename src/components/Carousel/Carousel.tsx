import * as React from 'react';

import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import Slider from '@source/partials/Slider';

interface Slide {
  image: LooseObject;
  url: LooseObject;
  title: string;
}

export interface CarouselProps {
  data: {
    displayOnTop: boolean;
    slides: Slide[];
  };
}

export interface CarouselState {
  currentIndex: number;
  // tslint:disable-next-line:no-any
  galleryItems: any;
  activeSlide: number;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      currentIndex: 0,
      activeSlide: 0,
      galleryItems: this.galleryItems(),
    };

    this.onSlideChanged.bind(this);
  }

  onSlideChanged = (e) => {
    this.setState({ currentIndex: e.item });
  }

  galleryItems() {  
    const { slides } = this.props.data;
    let images = [];

    if (slides) {
      slides.map((slide, i) => {
        if (slide.image) {
          images.push
          (
            <Link url={slide.url && slide.url.url}>
              <Media key={i} type={'image'} data={slide.image} />
            </Link>
          );
        }
      });
    }
    return images;
  }

   public render() {
    const { slides, displayOnTop } = this.props.data;
    
    return (
      <List data={slides}>
        {({ data }) => (
          <div className={'carousel'}>
            {displayOnTop ? <div className={'carousel__divider'} /> : ''}
    
            <div className={'carousel__images'} style={displayOnTop ? {} : { gridRow: 'auto' }}>
              <Slider  
                delay={8000} 
                showDots={true}
                autoplay={true}
                showArrows={false} 
                onSlideChanged={this.onSlideChanged}
                slides={this.state.galleryItems}
                slideToIndex={this.state.currentIndex}
              />
            </div>
            
            <div className={'carousel__titles'} style={displayOnTop ? {} : { gridRow: 'auto' }}>
              <ul className={'carousel__titles__list'}>
                {data && data.map((slide, i) => (
                  <li 
                    key={i} 
                    className={'carousel__titles__list__item'}
                    style={i === this.state.currentIndex ? { 
                      color: '#3eac49', 
                      fontWeight: 700,
                      backgroundColor: 'white',
                      boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
                      borderBottom: 'none !important'
                    } : {}}
                  >
                    <span>{slide.title && slide.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>    
        )}
      </List>
    );
  }
}

export default Carousel;
