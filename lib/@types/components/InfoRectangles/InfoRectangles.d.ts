/// <reference types="react" />
interface InfoRectangles {
    opacity: number;
    image: LooseObject;
    icon: LooseObject;
    title: string;
    url: LooseObject;
    titleColor: string;
    gradientColor: string;
}
export interface InfoRectanglesProps {
    data: {
        infoRectangles: InfoRectangles[];
    };
}
declare const InfoRectangles: (props: InfoRectanglesProps) => JSX.Element;
export default InfoRectangles;
