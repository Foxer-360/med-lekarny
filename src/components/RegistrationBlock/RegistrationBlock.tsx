import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import Button from '../../partials/Button';
import getFileUrl from '../../helpers/getUrl';

export interface RegistrationBlockProps {
  data: {
    title: string;
    text: string;
    btnTitle: string;
    btnUrl?: LooseObject;
    conditionsFile?: LooseObject;
  };
}

const RegistrationBlock = (props: RegistrationBlockProps) => {
  const { title, text, btnTitle, btnUrl, conditionsFile } = props.data;

  return (
    <div className={'registration-block'}>
      <div className="container">
        {title && <h3>{title}</h3>}
        {text && <ReactMarkdown source={text} />}

        {btnTitle &&
          <div className={'registration-block__btn-holder'}>
            <Button url={btnUrl} classes={'btn--greenBkg hCenterBlock'}>
              {btnTitle}
            </Button>
          </div>}

        {conditionsFile && conditionsFile.filename &&
          <a
            download={true}
            target={'_blank'}
            href={getFileUrl(conditionsFile)}
            className={'registration-block__conditions'}
          >
            Všeobecné obchodní podmínky
          </a>}
      </div>
    </div>
  );
};

export default RegistrationBlock;
