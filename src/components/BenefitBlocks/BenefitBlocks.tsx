import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import List from '../List';
import Media from '../../partials/Media';

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
            <div className="container">
              <div className={'benefit-blocks__divider'} />
              {title && <h3>{title}</h3>}
            </div>

            <div className="container">
              <div className={'benefit-blocks__list row'}>
                {data && data.map((benefit, i) => {
                  return (
                    <div key={i} className={'col-sm-12 col-md-6 col-xl-4'}>
                      <div className={'benefit-blocks__list__item'}>
                        <div className="row">
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
                        </div>

                        <div className={'benefit-blocks__list__item--divider'} />

                        <div className="row">
                          <div className={'benefit-blocks__list__item__bottom'}>
                            <div>
                              {benefit.bottomText && <ReactMarkdown source={benefit.bottomText} />}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="container">
              <div className={'benefit-blocks__divider'} />
            </div>
        </div>
      )}
    </List>
  );
};

export default BenefitBlocks;