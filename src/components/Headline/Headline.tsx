import * as React from 'react';

export interface HeadlineProps {
  data: {
    title: string;
    displayOnTop: boolean;
  };
}

const Headline = (props: HeadlineProps) => {
  const { title, displayOnTop } = props.data;

  return (
    <div 
      className={'headline'}
      style={displayOnTop ? { paddingTop: 170 } : {}}
    >
      {title && <h3>{title}</h3>}
    </div>
  );
};

export default Headline;