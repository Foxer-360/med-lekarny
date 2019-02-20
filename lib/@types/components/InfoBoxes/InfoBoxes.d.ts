/// <reference types="react" />
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
declare const InfoBoxes: (props: InfoBoxesProps) => JSX.Element;
export default InfoBoxes;
