import * as React from 'react';
import InfoElement from './components/InfoElement';
import List from '../List';

interface Box {
  title: string;
  gradientColor: string;
  button: string;
  titleColor: string;
  image: LooseObject;
  link?: LooseObject;
}

export interface CustomInfoBoxesProps {
  languageCode?: string;
  data: {
    title?: string;
    boxes: Box[];
  };
}

const CustomInfoBoxes = (props: CustomInfoBoxesProps) => {
  const { title, boxes } = props.data;

  return (
    <List data={boxes}>
      {({ data }) => (
        <section className={'custom-info-boxes'}>
          {title && title.length > 1 && <h3>{title}</h3>}
    
          <div className={'container'}>
            <div className={'custom-info-boxes__list grid'}>
              {data && data.map((box, i) => (
                <InfoElement
                  link={box.link}
                  gradientColor={box.gradientColor}
                  title={box.title}
                  image={box.image}
                  button={box.button}
                  titleColor={box.titleColor}
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

export default CustomInfoBoxes;