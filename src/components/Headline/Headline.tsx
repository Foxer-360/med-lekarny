import * as React from 'react';

export interface HeadlineProps {
  data: {
    title: string;
  };
}

const Headline = (props: HeadlineProps) => {
  const { title } = props.data;

  return (
    <div className={'headline'}>
      {title && <h3>{title}</h3>}
    </div>
  );
};

export default Headline;