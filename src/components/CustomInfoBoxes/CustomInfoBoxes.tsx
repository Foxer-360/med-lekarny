import * as React from 'react';
import InfoElement from './components/InfoElement';

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
    <section className={'custom-info-boxes'}>
      {title && title.length > 1 && <h3>{title}</h3>}

      <div className={'container'}>
        <div className={'grid custom-info-boxes__list'}>
          {boxes && boxes.map((box, i) => (
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
  );
};

export default CustomInfoBoxes;