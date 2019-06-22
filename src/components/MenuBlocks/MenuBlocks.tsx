import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';
import getImgUrl from '../../helpers/getUrl';

interface MenuBlock {
  title: string;
  color: string;
  image: LooseObject;
  icon: LooseObject;
  url: LooseObject;
}

export interface MenuBlocksProps {
  data: {
    menuBlocks: MenuBlock[];
  };
}

const MenuBlocks = (props: MenuBlocksProps) => {
  const { menuBlocks } = props.data;

  return (
    <List data={menuBlocks}>
      {({ data }) => (
        <div className="container">
          <div className={'menu-blocks row'}>
            {data && data.map((block, i) => {
              return (
                <div key={i} className={`${i <= 1 ? 'col-12 col-md-6 ' : 'col-12 col-md-4 col-xl-3'}`}>
                  <div
                    className={`menu-blocks__item ${i <= 1 ? 'bigMenuBlock' : ''}`}
                    style={{ backgroundImage: block.image && `url(${getImgUrl(block.image)})` }}
                  >
                    <Link
                      {...block.url}
                      style={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1000
                      }}
                    />
                    
                    {block.icon && <Media type={'image'} data={block.icon} />}
                    {block.title && <p>{block.title}</p>}

                    <div
                      className={'menu-blocks__item__colorGradient'}
                      style={{ 
                        background: 
                          `linear-gradient(40deg, ${block.color && block.color || '#3eac49'} 0%, 
                          transparent 100%)` 
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </List>
  );
};

export default MenuBlocks;