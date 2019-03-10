import React from 'react';
export interface SliderProps {
    delay?: number;
    autoplay?: boolean;
    showDots?: boolean;
    showArrows?: boolean;
    slides: Array<any>;
    slideToIndex: number;
    onSlideChanged?: any;
}
export interface SliderState {
    interval: any;
    slides: Array<any>;
    currentIndex: number;
    translateValue: number;
}
declare class Slider extends React.Component<SliderProps, SliderState> {
    constructor(props: SliderProps);
    componentDidMount(): void;
    componentWillUnmount: () => void;
    onSlideChanged(index: number): void;
    onSlideToIndexChange: (currentIndex: any, slideToIndex: any) => void;
    goToNextSlide: () => void;
    goToPrevSlide: () => void;
    goTo: (index: any) => void;
    slideWidth: () => number;
    render(): JSX.Element;
}
export default Slider;