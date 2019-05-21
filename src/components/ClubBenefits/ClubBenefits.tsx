import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import List from '../List';
import Link from '../../partials/Link';
import Button from '../../partials/Button';

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
            <div className={'club-benefits__list row'}>
              {data && data.map((benefit, i) => {
                return (
                  <div key={i} className={'club-benefits__list__item col-12 col-md-6 col-lg-3'}>
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
              <Link {...conditionsUrl} className={'club-benefits__conditions'}>
                Všeobecné obchodní podmínky
              </Link>}
          </div>
        </div>
      )}
    </List>
  );
};

export default ClubBenefits;
