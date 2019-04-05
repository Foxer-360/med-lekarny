import * as React from 'react';

import Link from '@source/partials/Link';
import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';

export interface InfoElementProps {
  title: string;
  gradientColor: string;
  button: string;
  titleColor: string;
  image: LooseObject;
  languageCode?: string;
  link?: LooseObject;
}

export default function InfoElement(props: InfoElementProps) {
  const { title, gradientColor, image, button, titleColor, link } = props;

  return (
    <Link
      url={link && link.url}
      pageId={link && link.pageId}
      urlNewWindow={link && link.urlNewWindow}
      className={'custom-info-boxes__list__element'}
      style={{ backgroundImage: image && `url(${getImageUrl(image)})` }}
    >
      <div className={'fullWidthContainer custom-info-boxes__list__element__content'}>
        {titleColor && title && <h5 style={{ color: `${titleColor}` }}>{title}</h5>}

        {button && <Button classes={'btn--fullWidth ' + button}>vice info</Button>}
      </div>

      {gradientColor && (
        <div
          className={'custom-info-boxes__list__element--colorGradient'}
          style={{ background: `linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, ${gradientColor} 100%)` }}
        />
      )}
    </Link>
  );
}