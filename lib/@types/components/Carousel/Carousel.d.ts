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
    slides: Array<any>;
    currentIndex: number;
    delay: number;
    translateValue: number;
    autoplay: boolean;
    showDots: boolean;
    showArrows: boolean;
}
declare class Carousel extends React.Component<CarouselProps, CarouselState> {
    constructor(props: CarouselProps);
    componentDidMount(): void;
    componentWillUnmount: () => void;
    galleryItems(): any[];
    goToNextSlide: () => void;
    goToPrevSlide: () => void;
    goTo: (index: any) => void;
    slideWidth: () => number;
    render(): JSX.Element;
}
export default Carousel;
