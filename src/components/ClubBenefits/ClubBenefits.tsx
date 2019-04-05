import * as React from 'react';

import List from '../List';
import Link from '@source/partials/Link';
import ReactMarkdown from 'react-markdown';
import Button from '@source/partials/Button';

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
    <List data={benefits}>
      {({ data }) => (
        <div className={'club-benefits'}>
          <div className={'container'}>
            <div className={'club-benefits__list grid'}>
              {data && data.map((benefit, i) => {
                return (
                  <div key={i} className={'club-benefits__list__item'}>
                    {benefit.title && <ReactMarkdown source={benefit.title} />}
                  </div>
                );
              })}
            </div>
    
            {buttonTitle && 
              <div className={'club-benefits__btn-holder'}>
                <Button url={buttonUrl} classes={'btn--greenBkg hCenterBlock'}>
                  {buttonTitle}
                </Button>
              </div>}
            
            {conditionsUrl && 
              <Link 
                className={'club-benefits__conditions'}
                url={conditionsUrl && conditionsUrl.url}
                pageId={conditionsUrl && conditionsUrl.pageId}
                urlNewWindow={conditionsUrl && conditionsUrl.urlNewWindow}
              >
                Všeobecné obchodní podmínky
              </Link>}
          </div>
        </div>
      )}
    </List>
  );
};

export default ClubBenefits;