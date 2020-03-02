import * as React from 'react';
import * as ReactMarkdown from 'react-markdown/with-html';

import Media from '../../partials/Media';

export interface BlogArticleProps {
  data: {
    title: string;
    image: LooseObject;
    text: string;
  };
}

const BlogArticle = (props: BlogArticleProps) => {
  const { title, image, text } = props.data;

  return (
    <div className={'text-block-with-image'}>
      <div className="container">
        {title && <h3>{title}</h3>}
        <div className={'hCenterBlock'} style={{ maxWidth: 820 }}>
          {image && <Media type={'image'} data={image} />}
          {text && <ReactMarkdown
            skipHtml={false}
            escapeHtml={false}                              
            source={text}
          />}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
