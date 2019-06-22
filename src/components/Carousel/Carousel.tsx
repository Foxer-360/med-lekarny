import * as React from 'react';
import Slider from 'react-slick';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';

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
  slideIndex: number;
  updateCount: number;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  public slider: any;

  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      slideIndex: 0,
      updateCount: 0
    };

    this.slider = React.createRef();
  }

  render() {
    const { displayOnTop } = this.props.data;
 
    return (
      <List data={this.props.data.slides || []}>
        {({ data: slides }) => {

          const arrayOfSlides = (slides && slides.map((slide, i) => (
            <div key={i} className={'carousel__slide'}>
              <div className="carousel__slide__item">
                <Link {...slide.url}>
                  <Media type={'image'} data={slide.image} />
                </Link>
              </div>
            </div>
          ))) || [];
        
          var settings = {
            speed: 1000,
            dots: true,
            arrows: false,
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true,
            beforeChange: (current, next) => this.setState({ slideIndex: next }),
            afterChange: () => this.setState(state => ({ updateCount: state.updateCount + 1 }))
          };

          return (
            <div className={`carousel ${displayOnTop ? 'sliderAtTop' : ''}`}>
              <Slider ref={slider => (this.slider = slider)} {...settings}>
                {arrayOfSlides}
              </Slider>

              <div className={'carousel__titles'}>
                <ul className={'carousel__titles__list'}>
                  {slides && slides.map((slide, i) => (
                    <li 
                      key={i} 
                      onClick={() => this.slider.slickGoTo(i)}
                      className={'carousel__titles__list__item'}
                      style={i === this.state.slideIndex ? { 
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
          );
        }}
      </List>
    );
  }
}

export default Carousel;
