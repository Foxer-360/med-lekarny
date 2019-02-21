/// <reference types="react" />
export interface TextBlockWithImageProps {
    data: {
        title: string;
        image: LooseObject;
        text: string;
    };
}
declare const TextBlockWithImage: (props: TextBlockWithImageProps) => JSX.Element;
export default TextBlockWithImage;
