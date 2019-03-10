import * as React from 'react';
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
    galleryItems: any;
    activeSlide: number;
}
declare class Carousel extends React.Component<CarouselProps, CarouselState> {
    constructor(props: CarouselProps);
    onSlideChanged: (e: any) => void;
    galleryItems(): any[];
    render(): JSX.Element;
}
export default Carousel;
