import React from 'react';

import Dots from './components/Dots';
import Slide from './components/Slide';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';

export interface SliderProps {
  delay?: number;
  autoplay?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  // tslint:disable-next-line:no-any
  slides: Array<any>;
  slideToIndex: number;
  // tslint:disable-next-line:no-any
  onSlideChanged?: any;
}
export interface SliderState {
  // tslint:disable-next-line:no-any
  interval: any;
  // tslint:disable-next-line:no-any
  slides: Array<any>;
  currentIndex: number;
  translateValue: number;
}

class Slider extends React.Component<SliderProps, SliderState> {
  constructor(props: SliderProps) {
    super(props);

    this.state = {
      slides: [],
      interval: null,
      currentIndex: 0,
      translateValue: 0,
    };
  }
  
  componentDidMount () {
    const { autoplay, delay } = this.props;
    this.setState({slides: this.props.slides});

    if (autoplay) {
      let interval = setInterval(this.goToNextSlide, delay);
      this.setState({ interval });
    }
  }

  componentWillUnmount = () => clearInterval(this.state.interval);

  onSlideChanged(index: number) {
    if (this.props.onSlideChanged) {
      this.props.onSlideChanged({
        item: index,
      });
    }
  }

  onSlideToIndexChange = (currentIndex, slideToIndex) => {
    if (slideToIndex === currentIndex + 1) {
      this.goToNextSlide();
    } else if (slideToIndex === currentIndex - 1) {
      this.goToPrevSlide();
    } else {
      this.goTo(slideToIndex);
    }
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.slides.length - 1) {
      this.onSlideChanged(0);
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));

    this.onSlideChanged(this.state.currentIndex);
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) { 
      this.setState({
        currentIndex: this.state.slides.length,
        translateValue: this.state.slides.length * -(this.slideWidth())
      });
      this.onSlideChanged(this.state.slides.length);
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
    this.onSlideChanged(this.state.currentIndex);
  }

  goTo = (index) => {
    if (index === this.state.currentIndex) {
      return;
    }

    if (index > this.state.currentIndex) {
      this.setState({
        currentIndex: index,
        translateValue: index * -(this.slideWidth())
      });
    } else {
      this.setState({
        currentIndex: index,
        translateValue: this.state.translateValue + (this.state.currentIndex - index) * (this.slideWidth())
      });
    }
    this.onSlideChanged(index);
  }

  slideWidth = () => {
    if (document.querySelector('.slider__slide')) {
      return document.querySelector('.slider__slide').clientWidth;
    } else {
      return 0; // fix for backoffice
    }
  }

  render() {

    return (
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

        {this.props.showArrows ? (
          <>
            <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
            <RightArrow goToNextSlide={this.goToNextSlide}/>
          </>
        ) : ''}
        
        {this.props.showDots ? 
          <Dots 
            goTo={this.goTo} 
            len={this.props.slides.length} 
            currentIndex={this.state.currentIndex}
          /> : ''
        }
        
      </div>
    );
  }
}

export default Slider;