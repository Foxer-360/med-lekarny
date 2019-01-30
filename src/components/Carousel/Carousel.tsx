import * as React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';

interface Slide {
  image: LooseObject;
  url: LooseObject;
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

     // recommended image size 1500px x 490px
    if (slides) {
      slides.map((slide, i) => {
        if (slide.image) {
          images.push
          (
            <Link url={slide.url && slide.url}>
              <Media key={i} type={'image'} data={slide.image} />
            </Link>
          );
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
        <div className={'carousel__divider'} />

         <div className={'carousel__images'}>
          <AliceCarousel 
            autoPlay={true}
            dotsDisabled={true}
            buttonsDisabled={true}
            autoPlayInterval={3500}
            items={this.state.galleryItems}
            onSlideChanged={(e) => {
              this.setState({ currentIndex: e.item }); 
            }}
            slideToIndex={this.state.currentIndex}
          />
        </div>

         <div className={'carousel__titles'}>
          <ul className={'carousel__titles__list'}>
            {slides && slides.map((slide, i) => (
              <li 
                key={i} 
                onClick={() => this.slideTo(i)}
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
        <br style={{ clear: 'both'}} />
      </div>
    );
  }
}

export default Carousel;