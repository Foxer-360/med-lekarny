import * as React from 'react';
import Link from '@source/partials/Link';

export interface MenuBlocksProps {
  languageCode?: string;
}

const MenuBlocks = (props: MenuBlocksProps) => {

  return (
    <div className="container">
      <div className={'menu-blocks grid'}>
        <a 
          style={{ backgroundImage: `url(/assets/mediconLekarny/images/menu-blocks/akcebg.jpg)` }} 
          className={'menu-blocks__item'}
        >
          <img src={'/assets/mediconLekarny/images/menu-blocks/akce.svg'} alt="Akce a slevy"/>
          <p>Akce a slevy</p>
          <div
            className={'menu-blocks__item__colorGradient'}
            style={{ background: `linear-gradient(40deg, rgba(0, 173, 204, 0.7) 0%, transparent 100%)` }}
          />
        </a>
        <a 
          style={{ backgroundImage: `url(/assets/mediconLekarny/images/menu-blocks/klubbg.jpg)` }} 
          className={'menu-blocks__item'}
        >
          <img src={'/assets/mediconLekarny/images/menu-blocks/klub.svg'} alt="Klub výhod"/>
          <p>Klub výhod</p>
          <div
            className={'menu-blocks__item__colorGradient'}
            style={{ background: `linear-gradient(40deg, rgba(0, 173, 204, 0.7) 0%, transparent 100%)` }}
          />
        </a>
        <a 
          style={{ backgroundImage: `url(/assets/mediconLekarny/images/menu-blocks/lekarnabg.jpg)` }} 
          className={'menu-blocks__item'}
        >
          <img src={'/assets/mediconLekarny/images/menu-blocks/lekarna.svg'} alt="Lékárna"/>
          <p>Lékárna</p>
          <div
            className={'menu-blocks__item__colorGradient'}
            style={{ background: `linear-gradient(40deg, rgba(0, 173, 204, 0.7) 0%, transparent 100%)` }}
          />
        </a>
        <a 
          style={{ backgroundImage: `url(/assets/mediconLekarny/images/menu-blocks/dermocentrumbg.jpg)` }} 
          className={'menu-blocks__item'}
        >
          <img src={'/assets/mediconLekarny/images/menu-blocks/dermocentrum.svg'} alt="Dermocentrum"/>
          <p>Dermocentrum</p>
          <div
            className={'menu-blocks__item__colorGradient'}
            style={{ background: `linear-gradient(40deg, rgba(239, 64, 76, 0.6) 0%, transparent 100%)` }}
          />
        </a>
        <a 
          style={{ backgroundImage: `url(/assets/mediconLekarny/images/menu-blocks/potrebybg.jpg)` }} 
          className={'menu-blocks__item'}
        >
          <img src={'/assets/mediconLekarny/images/menu-blocks/potreby.svg'} alt="Zdravotní potřeby"/>
          <p>Zdravotní potřeby</p>
          <div
            className={'menu-blocks__item__colorGradient'}
            style={{ background: `linear-gradient(40deg, rgba(250, 167, 74, 0.9) 0%, transparent 100%)` }}
          />
        </a>
        <a 
          style={{ backgroundImage: `url(/assets/mediconLekarny/images/menu-blocks/prirodnibg.jpg)` }} 
          className={'menu-blocks__item'}
        >
          <img src={'/assets/mediconLekarny/images/menu-blocks/prirodni.svg'} alt="Přírodní lékarna"/>
          <p>Přírodní lékarna</p>
          <div
            className={'menu-blocks__item__colorGradient'}
            style={{ background: `linear-gradient(40deg, rgba(62, 172, 73, 0.8) 0%, transparent 100%)` }}
          />
        </a>
      </div>
    </div>
  );
};

export default MenuBlocks;