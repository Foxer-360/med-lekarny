import * as React from 'react';
import Slide from './components/Slide';
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
    interval: any;
    slides: any;
    currentIndex: number;
    delay: number;
    translateValue: number;
    autoplay: boolean;
    showDots: boolean;
    showArrows: boolean;
    pause: boolean;
}
declare class Carousel extends React.Component<CarouselProps, CarouselState> {
    constructor(props: CarouselProps);
    componentDidMount(): void;
    componentWillReceiveProps: (nextProps: any) => void;
    componentWillUnmount: () => void;
    pause(e: any): void;
    run(e: any): void;
    goToNextSlide: () => void;
    goToPrevSlide: () => void;
    goTo: (index: any) => void;
    slideWidth: () => number;
    renderSlides(data: any): any[];
    renderSlider(data: any): JSX.Element;
    render(): JSX.Element;
}
export default Carousel;
