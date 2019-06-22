import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';
import getImgUrl from '../../helpers/getUrl';

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
                  <div key={i} className={'col-12 col-sm-6 col-md-4 col-xl-3'}>
                    <div 
                      className={'mini-boxes__list__item'}
                      style={{ backgroundImage: box.image && `url(${getImgUrl(box.image)})` }}
                    >
                      {box.title && 
                        <p 
                          style={
                            box.titleColor ? 
                            { color: `${box.titleColor}` } : 
                            {}}
                        >{box.title}
                        </p>}

                      <Link
                        {...box.url}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          zIndex: 1000
                        }}
                      />

                      <div
                        className={'mini-boxes__list__item--colorGradient'}
                        style={{ 
                          background: `linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, 
                          ${box.gradientColor} 100%)` }}
                      />
                    </div>
                  </div>
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