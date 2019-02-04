import * as React from 'react';
import Media from '@source/partials/Media';

export interface OdbornostProps {
  data: {
    image: LooseObject;
    doctorName: string;
    cite: string;
  };
}

const Odbornost = (props: OdbornostProps) => {
  const { image, doctorName, cite } = props.data;

  return (
    <div className={'odbornost'}>

      <div className={'container'}>
        <div className={'odbornost__doctor'}>
          {(image && <Media type={'image'} data={image} />) || (
            <img src={'/assets/mediconLekarny/images/odbornost-lekar.jpg'} alt="Doctor photo"/>
          )}

          <div className={'grid grid--vCenterBlock'}>
            <div>
              <div className={'horizontal-line'} />
              {doctorName && <p>{doctorName}</p>}
              {cite && <cite>{cite}</cite>}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Odbornost;