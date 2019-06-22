import * as React from 'react';

import Button from '../../../partials/Button';
import getImgUrl from '../../../helpers/getUrl';

export interface InfoElementProps {
  title: string;
  image?: LooseObject;
  url?: LooseObject;
}

export default function InfoElement(props: InfoElementProps) {
  
  const { title, image, url } = props;

  return (
    <div className={'col-sm-12 col-md-6 col-xl-4'}>
      <div 
        className={'info-boxes__list__element'} 
        style={{ backgroundImage: image && `url(${getImgUrl(image)})` }}
      >
        <div className={'fullWidthContainer info-boxes__list__element__content'}>
          {title && <h5>{title}</h5>}

          <Button url={url} classes={'btn--fullWidth btn--greenBkg'}>
            vice info
          </Button>
        </div>

        <div 
          className={'info-boxes__list__element--colorGradient'}
          style={{ background: `linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, white 100%)`, }}
        />
      </div>
    </div>
  );
}