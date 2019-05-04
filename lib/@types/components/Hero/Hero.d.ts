import * as React from 'react';
export interface HeroProps {
    data: {
        title: string;
        text: string;
        image?: LooseObject;
        displayBlackOverlay: boolean;
        displayWhiteOverlay: boolean;
        titleColor: string;
        textColor: string;
        opacity: number;
    };
}
export interface HeroState {
}
declare class Hero extends React.Component<HeroProps, HeroState> {
    render(): JSX.Element;
}
export default Hero;
