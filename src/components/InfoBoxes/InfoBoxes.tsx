import * as React from 'react';
import InfoElement from './components/InfoElement';

interface Box {
  title: string;
  image: LooseObject;
  url: LooseObject;
}

export interface InfoBoxesProps {
  data: {
    title?: string;
    dividerOnTop?: boolean;
    boxes: Box[];
  };
}

const InfoBoxes = (props: InfoBoxesProps) => {
  const { title, dividerOnTop, boxes } = props.data;

  return (
    <section className={'info-boxes'}>
      <div className={'container'}>
        {dividerOnTop ? <div className={'info-boxes__divider'} /> : ''}
        {title && <h3>{title}</h3>}
        <div className={'grid info-boxes__list'}>
          {boxes && boxes.map((box, i) => (
            <InfoElement
              title={box.title}
              image={box.image}
              url={box.url}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;