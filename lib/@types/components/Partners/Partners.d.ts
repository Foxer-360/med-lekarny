/// <reference types="react" />
interface Partner {
    image: LooseObject;
    url: LooseObject;
}
export interface PartnersProps {
    data: {
        title: string;
        partners: Partner[];
    };
}
declare const Partners: (props: PartnersProps) => JSX.Element;
export default Partners;
