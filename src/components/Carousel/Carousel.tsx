import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';

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
  slides: any;
  currentIndex: number;
  delay: number;
  translateValue: number;
  autoplay: boolean;
  showDots: boolean;
  showArrows: boolean;
  pause: boolean;
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
      pause: false,
      slides: this.props.data.slides
    };
  }
  
  componentDidMount () {
    if (this.state.autoplay && !this.state.pause) {
      let interval = setInterval(this.goToNextSlide, this.state.delay);
      this.setState({ interval });
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.state.slides !== nextProps.data.slides) {
      this.setState({ slides: nextProps.data.slides });
    }
  }

  componentWillUnmount = () => {
    if (!this.state.pause && this.state.autoplay) {
      clearInterval(this.state.interval);
    }
  }

  pause(e: any) {
    e.preventDefault();
    if (this.state.autoplay && !this.state.pause) {
      clearInterval(this.state.interval);
      let interval = setInterval(this.goToNextSlide, 1000000);
      this.setState({ interval, pause: true });
    }
  }

  run(e: any) {
    e.preventDefault();
    if (this.state.autoplay && this.state.pause) {
      clearInterval(this.state.interval);
      let interval = setInterval(this.goToNextSlide, this.state.delay);
      this.setState({ interval, pause: false });
    }
  }

  goToNextSlide = () => {
    if (this.state.pause) { return; }
    clearInterval(this.state.interval);

    if (this.state.currentIndex === this.state.slides.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
        interval: setInterval(this.goToNextSlide, this.state.delay)
      });
    }

    this.setState({
      currentIndex: this.state.currentIndex + 1,
      translateValue: this.state.translateValue + -(this.slideWidth()),
      interval: setInterval(this.goToNextSlide, this.state.delay)
    });
  }

  goToPrevSlide = () => {
    if (this.state.pause) { return; }
    clearInterval(this.state.interval);

    if (this.state.currentIndex === 0) { 
      return this.setState({
        currentIndex: this.state.slides.length - 1,
        translateValue: (this.state.slides.length - 1) * -(this.slideWidth()),
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
      var iFrameWidth = document.querySelector('iframe').clientWidth;
      // fix for desktop backoffice: 75% width because '.slider__slide' 75% too (Not whole Carousel)
      return (iFrameWidth / 100) * 75;
    }
  }
  
  renderSlides(data: any) {  
    let result = [];

    if (data) {
      data.map((slide, i) => {
        if (slide.image) {
          result.push
          (
            <div key={i} className="slider__slide" id={'slider__slide'}>
              <Link {...slide.url}>
                <Media type={'image'} data={slide.image} />
              </Link>
            </div>
          );
        }
      });
    }
    return result;
  }

  renderSlider(data: any) {
    return (
      <div className="slider" onMouseEnter={e => this.pause(e)} onMouseLeave={e => this.run(e)}>
        <div 
          className="slider__wrapper"
          style={{ 
            transform: `translateX(${this.state.translateValue}px)`, 
            transition: 'transform ease-out 0.25s'}}
        >  
          {this.renderSlides(data)}
        </div>
  
        {this.state.showArrows ? (
          <>
            <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
            <RightArrow goToNextSlide={this.goToNextSlide}/>
          </>
        ) : ''}
        
        {this.state.showDots && this.state.slides.length > 0 ?
          <Dots 
            goTo={this.goTo} 
            len={this.state.slides.length} 
            currentIndex={this.state.currentIndex}
          /> : ''
        }
      </div>
    );
  }

  render() {
    const { displayOnTop } = this.props.data;
 
    return (
      <List data={this.state.slides}>
        {({ data }) => (
          <div>
            {displayOnTop ? <div className={'carousel__divider'} /> : ''}

            <div className={'carousel'}>      
              <div className={'carousel__images'}>
                {this.renderSlider(data)}
              </div>
              
            </div>
            <div className={'carousel__titles'}>
              <ul className={'carousel__titles__list'}>
                {data && data.map((slide, i) => (
                  <li 
                    key={i} 
                    onClick={() => this.goTo(i)}
                    className={'carousel__titles__list__item'}
                    style={i === this.state.currentIndex ? { 
                      color: '#3eac49', 
                      backgroundColor: 'white',
                      boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
                      borderBottom: 'none !important'
                    } : {}}
                  >
                    <i>{slide.title}</i>
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
