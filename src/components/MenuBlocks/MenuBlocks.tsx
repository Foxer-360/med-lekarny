import * as React from 'react';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import getImageUrl from '@source/helpers/getImageUrl';
import List from '../List';

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
          <div className={'menu-blocks grid'}>
            {data && data.map((block, i) => {
              return (
                <Link 
                  key={i}
                  url={block.url && block.url.url}
                  className={'menu-blocks__item'}
                  style={{ backgroundImage: block.image && `url(${getImageUrl(block.image)})` }}
                >
                  {block.icon && <Media type={'image'} data={block.icon} />}
                  <p>{block.title && block.title}</p>
                  <div
                    className={'menu-blocks__item__colorGradient'}
                    style={{ 
                      background: 
                        `linear-gradient(40deg, ${block.color && block.color || '#3eac49'} 0%, 
                        transparent 100%)` 
                    }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </List>
  );
};

export default MenuBlocks;