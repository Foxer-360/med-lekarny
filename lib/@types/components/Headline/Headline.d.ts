/// <reference types="react" />
export interface HeadlineProps {
    data: {
        title: string;
        displayOnTop: boolean;
    };
}
declare const Headline: (props: HeadlineProps) => JSX.Element;
export default Headline;
