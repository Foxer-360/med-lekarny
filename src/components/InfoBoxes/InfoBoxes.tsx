import * as React from 'react';

import List from '../List';
import InfoElement from './components/InfoElement';

interface Box {
  title: string;
  image?: LooseObject;
  url?: LooseObject;
}

export interface InfoBoxesProps {
  data: {
    title?: string;
    dividerOnTop?: boolean;
    indentAtBottom: boolean;
    boxes: Box[];
  };
}

const InfoBoxes = (props: InfoBoxesProps) => {
  const { title, dividerOnTop, indentAtBottom, boxes } = props.data;

  return (
    <List data={boxes}>
      {({ data }) => (
        <section className={`info-boxes ${indentAtBottom ? 'info-boxes--paddingBottom' : ''}`}>
          <div className={'container'}>
            {dividerOnTop ? <div className={'info-boxes__divider'} /> : ''}
            {title && <h3>{title}</h3>}
            <div className={'info-boxes__list row'}>
              {data && data.map((box, i) => (
                <InfoElement
                  key={i}
                  url={box.url}
                  title={box.title}
                  image={box.image}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </List>
  );
};

export default InfoBoxes;