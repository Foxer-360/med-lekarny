import * as React from 'react';
import getImageUrl from '@source/helpers/getImageUrl';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';

interface InfoRectangles {
  image: LooseObject;
  icon: LooseObject;
  title: string;
  url: LooseObject;
  titleColor: string;
  gradientColor: string;
}

export interface InfoRectanglesProps {
  data: {
    infoRectangles: InfoRectangles[];
  };
}

const InfoRectangles = (props: InfoRectanglesProps) => {
  const { infoRectangles } = props.data;

  return (
    <section className={'info-rectangles'}>
      <div className="container">
        <div className={'info-rectangles__divider'} />
        <div className={'info-rectangles__list grid'}>
          {infoRectangles && infoRectangles.map((rectangle, i) => {
            
            return (
              <Link 
                key={i} 
                src={rectangle.url && rectangle.url.url}
                className={'info-rectangles__list__item'}
                style={{ backgroundImage: rectangle.image && `url(${getImageUrl(rectangle.image)})` }}
              >
                
                <div className={'info-rectangles__list__item__content'}>
                  {rectangle.icon && <Media type={'image'} data={rectangle.icon} />}
                  {rectangle.title && <p style={rectangle.titleColor && { color: `${rectangle.titleColor}` } || {}}>
                    {rectangle.title}
                  </p>}
                </div>
  
                {rectangle.gradientColor && (
                  <div
                    className={'info-rectangles__list__item--colorGradient'}
                    style={{ 
                      background: `linear-gradient(to left, rgba(125, 185, 232, 0) 0%, 
                      ${rectangle.gradientColor} 100%)` 
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoRectangles;