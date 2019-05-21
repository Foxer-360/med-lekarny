import * as React from 'react';

import List from '../List';
import Link from '@source/partials/Link';
import getImageUrl from '@source/helpers/getImageUrl';

interface MiniBox {
  title: string;
  gradientColor: string;
  titleColor: string;
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
    <List data={miniBoxes}>
      {({ data }) => (
        <div className={'mini-boxes'}>
          <div className="container">
            {dividerOnTop ? <div className={'mini-boxes__divider'} /> : ''}
            {title && <h3>{title}</h3>}
    
            <div className={'mini-boxes__list row'}>
              {data && data.map((box, i) => {
                return (
                  <Link 
                    key={i} 
                    {...box.url} 
                    className={'mini-boxes__list__item col-12 col-sm-6 col-md-4 col-xl-3'}
                    style={{ backgroundImage: box.image && `url(${getImageUrl(box.image)})` }}
                  >
                    {box.title && 
                      <p 
                        style={
                          box.titleColor ? 
                          { color: `${box.titleColor}` } : 
                          {}}
                      >{box.title}
                      </p>}
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
      )}
    </List>
  );
};

export default MiniBoxes;