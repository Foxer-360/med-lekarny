import * as React from 'react';

import getImgUrl from '../../helpers/getImgUrl';

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

export interface HeroState {}

class Hero extends React.Component<HeroProps, HeroState> {
  public render() {
    const { 
      title, 
      text, 
      image, 
      displayBlackOverlay, 
      displayWhiteOverlay, 
      titleColor, 
      textColor,
      opacity
    } = this.props.data;

    return (
      <div className="fullWidthContainer">
        <section 
          className={'hero'} 
          style={{ backgroundImage: image && `url(${getImgUrl(image)})` }}
        >
          {displayBlackOverlay && 
            <div style={opacity ? { opacity: opacity} : {}} className={'hero__blackOverlay'} />}
          {displayWhiteOverlay && 
            <div style={opacity ? { opacity: opacity} : {}} className={'hero__whiteOverlay'} />}

          <div className={'hero__holder'}>
            <div className={'container'}>
              {title && 
                <h1 className={`hero__title hero__title--${titleColor}`}>
                  {title}
                </h1>}

              {text && 
                <div className={`hero__text hero__text--${textColor} `}>
                  <p>{text}</p>
                </div>}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;