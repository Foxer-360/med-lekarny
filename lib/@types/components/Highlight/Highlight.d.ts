/// <reference types="react" />
export interface HighlightProps {
    data: {
        text: string;
        url: string;
    };
}
declare const Highlight: (props: HighlightProps) => JSX.Element;
export default Highlight;
