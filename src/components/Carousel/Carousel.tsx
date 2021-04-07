import * as React from 'react';
import Slider from 'react-slick';

import List from '../List';
import NextArrow from '../../partials/NextArrow';
import PrevArrow from '../../partials/PrevArrow';
import CarouselImageText from './components/CarouselImageText';
import { getImagePosition } from './utils';

interface Slide {
  image?: LooseObject;
  title?: string;
  secondaryImage?: LooseObject;
  textImage?: LooseObject;
  subTitle?: string;
  description?: string;
  isCentred?: boolean;
  imageOnRight?: boolean;
  backgroundColor?: string;
  textBackgroundColor?: string;
  url?: LooseObject;
  buttonTitle?: string;
}

export interface CarouselProps {
  data: {
    slides: Slide[];
  };
}

const Carousel = (props: CarouselProps) => (
  <List data={props.data.slides || []}>
    {({ data: slides }) => {
      const arrayOfSlides =
        (slides &&
          slides.map((slide, i) => {
            const {
              title,
              subTitle,
              image,
              description,
              isCentred,
              imageBackgroundColor,
              imageOnRight,
              secondaryImage,
              textImage,
              textBackgroundColor,
              isTextWhite,
              url,
              buttonTitle,
            } = slide;

            return (
              <CarouselImageText
                key={`imageTextSection--${i}`}
                title={title}
                subtitle={subTitle}
                image={image}
                secondaryImage={secondaryImage}
                imagePosition={getImagePosition(imageOnRight)}
                text={description}
                centerText={isCentred}
                imageBackgroundColor={imageBackgroundColor}
                textBackgroundColor={textBackgroundColor}
                isTextWhite={isTextWhite}
                textImage={textImage}
                url={url}
                buttonTitle={buttonTitle}
              />
            );
          })) ||
        [];

      const settings = {
        speed: 1000,
        dots: true,
        arrows: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: <NextArrow classes={'carousel--nextArrow'} />,
        prevArrow: <PrevArrow classes={'carousel--prevArrow'} />,
      };

      return (
        <div className={'carousel'}>
          <Slider {...settings}>{arrayOfSlides}</Slider>
        </div>
      );
    }}
  </List>
);

export default Carousel;
