/// <reference types="react" />
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
declare const CustomInfoBoxes: (props: CustomInfoBoxesProps) => JSX.Element;
export default CustomInfoBoxes;
