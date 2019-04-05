import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import List from '../List';
import Media from '@source/partials/Media';

interface Benefit {
  title: string;
  subtitle: string;
  icon: LooseObject;
  text: string;
  gradientText: string;
  logo: LooseObject;
  bottomText: string;
}

export interface BenefitBlocksProps {
  data: {
    title: string;
    benefits: Benefit[];
  };
}

const BenefitBlocks = (props: BenefitBlocksProps) => {
  const { title, benefits } = props.data;
  
  return (
    <List data={benefits}>
      {({ data }) => (
        <div className={'benefit-blocks'}>
          <div className={'container'}>
            <div className={'benefit-blocks__divider'} />
            {title && <h3>{title}</h3>}

            <div className={'benefit-blocks__list grid'}>
              {data && data.map((benefit, i) => {
                return (
                  <div key={i} className={'benefit-blocks__list__item grid'}>
                    <div className={'benefit-blocks__list__item__top'}>
                      {benefit.icon && <Media type={'image'} data={benefit.icon}/>}
                      {benefit.title && <h5>{benefit.title}</h5>}
                      {benefit.subtitle && 
                        <p className={'benefit-blocks__list__item__top__subtitle'}>
                          {benefit.subtitle}
                        </p>}
                      {benefit.text && 
                        <ReactMarkdown 
                          source={benefit.text} 
                          className={'benefit-blocks__list__item__top__text'} 
                        />}
                      {benefit.gradientText && 
                        <ReactMarkdown 
                          source={benefit.gradientText}
                          className={'benefit-blocks__list__item__top__gradient-text'} 
                        />}
                      {benefit.logo && <Media type={'image'} data={benefit.logo}/>}
                    </div>
                    <div className={'benefit-blocks__list__item__bottom grid'}>
                      {benefit.bottomText && <ReactMarkdown source={benefit.bottomText} />}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={'benefit-blocks__divider'} />
          </div>
        </div>
      )}
    </List>
  );
};

export default BenefitBlocks;