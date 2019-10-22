import * as React from 'react';
import Button from '../../../partials/Button';

export interface TitleProps {
  name: string;
}

const Title = (props: TitleProps) => {
  return (
    <div className={'pcTitle'}>
      <div className="row">
        <div className="col-md-6 align-content-center">
          <img src="/assets/mediconLekarny/images/logo.svg" alt="Medicon Logo" />
          <div className={'pcTitle__title'}>
            <h3>Lékárna</h3>
            <div className={'pcTitle__title__subtitle'}>
              <span>{props.name}</span>
              <span className={'pcTitle__title__subtitle__circles'}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <Button classes='btn--orangeBorder res_recipe'>rezervace e-&#8288;receptů</Button>
        </div>
      </div>
    </div>
  );
};

export default Title;
