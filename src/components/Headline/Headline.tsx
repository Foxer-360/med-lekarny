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
    <div className={`headline ${displayOnTop ? 'headline--paddingTop' : ''}`}>
      {title && <h3>{title}</h3>}
    </div>
  );
};

export default Headline;