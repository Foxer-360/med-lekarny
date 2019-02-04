import * as React from 'react';
import Button from '@source/partials/Button';
import Link from '@source/partials/Link';
import ReactMarkdown from 'react-markdown';

interface Benefit {
  title: string;
}

export interface ClubBenefitsProps {
  data: {
    buttonTitle: string;
    buttonUrl: LooseObject;
    conditionsUrl: LooseObject;
    benefits: Benefit[];
  };
}

const ClubBenefits = (props: ClubBenefitsProps) => {
  const { buttonTitle, buttonUrl, conditionsUrl, benefits } = props.data;
  return (
    <div className={'club-benefits'}>
      <div className={'container'}>
        <div className={'club-benefits__list grid'}>
          {benefits && benefits.map((benefit, i) => {
            return (
              <div key={i} className={'club-benefits__list__item'}>
                {benefit.title && <ReactMarkdown source={benefit.title} />}
              </div>
            );
          })}
        </div>

        {buttonTitle && 
          <Button url={buttonUrl && buttonUrl} classes={'btn--greenBkg hCenterBlock'}>
            {buttonTitle}
          </Button>}
        
        {conditionsUrl && 
          <Link className={'club-benefits__conditions'} url={conditionsUrl}>Všeobecné obchodní podmínky</Link>}

        <div className={'club-benefits__divider'} />
      </div>
    </div>
  );
};

export default ClubBenefits;