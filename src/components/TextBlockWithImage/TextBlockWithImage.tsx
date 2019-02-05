import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Media from '@source/partials/Media';

export interface TextBlockWithImageProps {
  data: {
    title: string;
    image: LooseObject;
    text: string;
  };
}

const TextBlockWithImage = (props: TextBlockWithImageProps) => {
  const { title, image, text } = props.data;

  return (
    <div className={'text-block-with-image'}>
      <div className="container">
        {title && <h3>{title}</h3>}
        <div className={'hCenterBlock'} style={{ maxWidth: 820 }}>
          {image && <Media type={'image'} data={image} />}
          {text && <ReactMarkdown source={text} />}
        </div>
      </div>
    </div>
  );
};

export default TextBlockWithImage;