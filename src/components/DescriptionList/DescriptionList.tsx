import * as React from 'react';
import * as ReactMarkdown from 'react-markdown/with-html';

export interface DescriptionListProps {
  data: {
    title: string;
    text: string;
  };
}

const DescriptionList = (props: DescriptionListProps) => {
  const { title, text } = props.data;

  return (
    <section className={'description-list'}>
      <div className={'container'}>

        {title && <h3>{title}</h3>}
        <div className={'description-list__content'}>
          {text && <ReactMarkdown
            skipHtml={false}
            escapeHtml={false}
            source={text}
          />}
        </div>

      </div>
    </section>
  );
};

export default DescriptionList;
