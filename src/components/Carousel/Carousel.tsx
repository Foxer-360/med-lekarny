import * as React from 'react';

import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';

import Dots from './components/Dots';
import Slide from './components/Slide';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';

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
  // tslint:disable-next-line:no-any
  interval: any;
  // tslint:disable-next-line:no-any
  slides: Array<any>;
  currentIndex: number;
  delay: number;
  translateValue: number;
  autoplay: boolean;
  showDots: boolean;
  showArrows: boolean;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      delay: 10000,
      autoplay: true,
      showDots: true,
      interval: null,
      currentIndex: 0,
      translateValue: 0,
      showArrows: false,
      slides: this.galleryItems(),
    };
  }
  
  componentDidMount () {
    this.setState({slides: this.state.slides});

    if (this.state.autoplay) {
      let interval = setInterval(this.goToNextSlide, this.state.delay);
      this.setState({ interval });
    }
  }

  componentWillUnmount = () => clearInterval(this.state.interval);

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

  goToNextSlide = () => {
    clearInterval(this.state.interval);

    if (this.state.currentIndex === this.state.slides.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
        interval: setInterval(this.goToNextSlide, this.state.delay)
      });
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth()),
      interval: setInterval(this.goToNextSlide, this.state.delay)
    }));
  }

  goToPrevSlide = () => {
    clearInterval(this.state.interval);

    if (this.state.currentIndex === 0) { 
      return this.setState({
        currentIndex: this.state.slides.length,
        translateValue: this.state.slides.length * -(this.slideWidth()),
        interval: setInterval(this.goToNextSlide, this.state.delay)
      });
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
      interval: setInterval(this.goToNextSlide, this.state.delay)
    }));
  }

  goTo = (index) => {
    if (index === this.state.currentIndex) { return; }

    clearInterval(this.state.interval);

    if (index > this.state.currentIndex) {
      this.setState({
        currentIndex: index,
        translateValue: index * -(this.slideWidth()),
        interval: setInterval(this.goToNextSlide, this.state.delay)
      });
    } else {
      this.setState({
        currentIndex: index,
        translateValue: this.state.translateValue + (this.state.currentIndex - index) * (this.slideWidth()),
        interval: setInterval(this.goToNextSlide, this.state.delay)
      });
    }
  }

  slideWidth = () => {
    if (document.querySelector('.slider__slide')) {
      return document.querySelector('.slider__slide').clientWidth;
    } else {
      return 0; // fix for backoffice
    }
  }
  
  render() {
    const { slides, displayOnTop } = this.props.data;

    const Slider = (
      <div className="slider">
        <div 
          className="slider__wrapper"
          style={{ 
            transform: `translateX(${this.state.translateValue}px)`, 
            transition: 'transform ease-out 0.25s'}}
        >  
            {
              this.state.slides.map((slide, i) => (
                <Slide key={i} slide={slide} />
              ))
            } 
        </div>
  
        {this.state.showArrows ? (
          <>
            <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
            <RightArrow goToNextSlide={this.goToNextSlide}/>
          </>
        ) : ''}
        
        {this.state.showDots ? 
          <Dots 
            goTo={this.goTo} 
            len={this.state.slides.length} 
            currentIndex={this.state.currentIndex}
          /> : ''
        }
        
      </div>
    );
 
    return (
      <List data={slides}>
        {({ data }) => (
          <div className={'carousel'}>
            {displayOnTop ? <div className={'carousel__divider'} /> : ''}
    
            <div className={'carousel__images'} style={displayOnTop ? {} : { gridRow: 'auto' }}>
              {Slider}
            </div>
            
            <div className={'carousel__titles'} style={displayOnTop ? {} : { gridRow: 'auto' }}>
              <ul className={'carousel__titles__list'}>
                {data && data.map((slide, i) => (
                  <li 
                    key={i} 
                    onClick={() => this.goTo(i)}
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