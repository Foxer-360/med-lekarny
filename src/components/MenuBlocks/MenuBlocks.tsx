import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';
import getImgUrl from '../../helpers/getImgUrl';
import Button from '../../partials/Button';

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

                    <div className={'menu-blocks__item__content'}>
                      {block.icon && <Media type={'image'} data={block.icon} />}

                      <div className={'menu-blocks__item__content__bottom'}>
                        {block.title && <p>{block.title}</p>}
                        {block.url && <Button url={block.url} classes={'btn btn--fullWidth btn--whiteBorder'}>
                          více info
                        </Button>}
                      </div>
                    </div>

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