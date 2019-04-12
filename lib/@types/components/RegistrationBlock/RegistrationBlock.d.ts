/// <reference types="react" />
export interface RegistrationBlockProps {
    data: {
        title: string;
        text: string;
        btnTitle: string;
        btnUrl?: LooseObject;
        conditionsFile?: LooseObject;
    };
}
declare const RegistrationBlock: (props: RegistrationBlockProps) => JSX.Element;
export default RegistrationBlock;
