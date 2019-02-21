/// <reference types="react" />
interface MiniBox {
    title: string;
    gradientColor: string;
    image: LooseObject;
    url: LooseObject;
}
export interface MiniBoxesProps {
    data: {
        title: string;
        dividerOnTop: boolean;
        miniBoxes: MiniBox[];
    };
}
declare const MiniBoxes: (props: MiniBoxesProps) => JSX.Element;
export default MiniBoxes;
