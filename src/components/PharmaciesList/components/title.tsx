import * as React from 'react';
import Button from '../../../partials/Button';
import DotsProps from '@source/components/Carousel/components/Dots';

export interface TitleProps {
  name: string;
  buttonText: string;
  buttonUrl?: LooseObject;
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
        {props.buttonUrl && props.buttonUrl.url && props.buttonText &&
        <div className="col-md-6">
          <Button classes="btn--orangeBorder res_recipe" url={props.buttonUrl}>
            {('' + props.buttonText).replace('-', '-\u2060')}
          </Button>
        </div>}
      </div>
    </div>
  );
};

export default Title;
