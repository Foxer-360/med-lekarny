/// <reference types="react" />
export interface RegistrationBlockProps {
    data: {
        title: string;
        text: string;
        btnTitle: string;
        btnUrl: LooseObject;
        conditionsUrl: LooseObject;
    };
}
declare const RegistrationBlock: (props: RegistrationBlockProps) => JSX.Element;
export default RegistrationBlock;
