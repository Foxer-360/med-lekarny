import * as React from 'react';
import InfoElement from './components/InfoElement';
import List from '../List';

interface Box {
  title: string;
  image: LooseObject;
  url: LooseObject;
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
        <section className={'info-boxes'} style={indentAtBottom ? {paddingBottom: 55} : {}}>
          <div className={'container'}>
            {dividerOnTop ? <div className={'info-boxes__divider'} /> : ''}
            {title && <h3>{title}</h3>}
            <div className={'grid info-boxes__list'}>
              {data && data.map((box, i) => (
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
      )}
    </List>
  );
};

export default InfoBoxes;