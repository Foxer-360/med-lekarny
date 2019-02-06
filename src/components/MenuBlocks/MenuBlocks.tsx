import * as React from 'react';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import getImageUrl from '@source/helpers/getImageUrl';

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
    <div className="container">
      <div className={'menu-blocks grid'}>
        {menuBlocks && menuBlocks.map((block, i) => {
          return (
            <Link 
              key={i}
              url={block.url.url}
              className={'menu-blocks__item'}
              style={{ backgroundImage: block.image && `url(${getImageUrl(block.image)})` }}
            >
              {block.icon && <Media type={'image'} data={block.icon} />}
              <p>{block.title && block.title}</p>
              <div
                className={'menu-blocks__item__colorGradient'}
                style={{ 
                  background: `linear-gradient(40deg, ${block.color && block.color || '#3eac49'} 0%, transparent 100%)` 
                }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuBlocks;