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
  itemsInSlide: number;
  galleryItems: any;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      currentIndex: 0,
      itemsInSlide: 1,
      galleryItems: this.galleryItems(),
    };
  }
  
  slideTo = (i) => {
    console.log(`currentIndex ` + this.state.currentIndex);
    console.log(`index ` + i);
    this.setState({ currentIndex: i });
  }

  galleryItems() {
    const { slides } = this.props.data;
    let images = [];
    
    if (slides) {
      slides.map((slide, i) => {
        if (slide.image) {
          images.push(<Media key={i} type={'image'} data={slide.image} />);
        }
      });
    }
    return images;
  }

  public render() {
    const { slides } = this.props.data;
    console.log(this.state.currentIndex);
    return (
      <div className={'carousel'}>
        <div className={'carousel__images'}>
          <AliceCarousel 
            autoPlay={true}
            dotsDisabled={true}
            buttonsDisabled={true}
            autoPlayInterval={2500}
            items={this.state.galleryItems}
            onSlideChanged={(e) => {
              this.setState({ currentIndex: e.item }); 
            }}
            slideToIndex={this.state.currentIndex}
          />
        </div>

        <div className={'carousel__titles'}>
          <ul>
            {slides && slides.map((slide, i) => (
              <li 
                key={i} 
                onClick={() => this.slideTo(i)}
                style={i === this.state.currentIndex ? { 
                  color: '#3eac49', 
                  fontWeight: 700,
                  backgroundColor: 'white',
                  boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
                  borderBottom: 'none !important'
                 } : {}} 
                // className={i === this.state.currentIndex ? 'carousel__titles__title--active' : ''}
              >
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