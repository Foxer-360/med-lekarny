import * as React from 'react';
import Link from '@source/partials/Link';
import getImageUrl from '@source/helpers/getImageUrl';

interface MiniBox {
  title: string;
  gradientColor: string;
  image: LooseObject;
  url: LooseObject;
}

export interface MiniBoxesProps {
  data: {
    title: string;
    dividerOnTop: boolean;
    miniBoxes: MiniBox[];
  };
}

const MiniBoxes = (props: MiniBoxesProps) => {
  const { title, dividerOnTop, miniBoxes } = props.data;

  return (
    <div className={'mini-boxes'}>
      <div className="container">
        {dividerOnTop ? <div className={'mini-boxes__divider'} /> : ''}
        {title && <h3>{title}</h3>}

        <div className={'mini-boxes__list grid'}>
          {miniBoxes && miniBoxes.map((box, i) => {
            return (
              <Link 
                key={i} 
                url={box.url && box.url} 
                className={'mini-boxes__list__item'}
                style={{ backgroundImage: box.image && `url(${getImageUrl(box.image)})` }}
              >
                {box.title && <p>{box.title}</p>}
                <div
                  className={'mini-boxes__list__item--colorGradient'}
                  style={{ 
                    background: `linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, 
                    ${box.gradientColor} 100%)` }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MiniBoxes;