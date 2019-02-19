import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '@source/partials/Button';
import Link from '@source/partials/Link';

export interface RegistrationBlockProps {
  data: {
    title: string;
    text: string;
    btnTitle: string;
    btnUrl: LooseObject;
    conditionsUrl: LooseObject;
  };
}

const RegistrationBlock = (props: RegistrationBlockProps) => {
  const { title, text, btnTitle, btnUrl, conditionsUrl } = props.data;

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

        {conditionsUrl && 
          <Link 
            className={'registration-block__conditions'} 
            url={conditionsUrl && conditionsUrl.url}
          >
            Všeobecné obchodní podmínky
          </Link>}
      </div>
    </div>
  );
};

export default RegistrationBlock;