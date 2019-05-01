import * as React from 'react';
interface Icon {
    title: string;
    url?: LooseObject;
}
export interface FooterProps {
    navigations?: LooseObject;
    languages?: LooseObject;
    languageCode?: string;
    data: {
        icons: Icon[];
        copyrights: string;
        gdprText: string;
        gdprFile?: LooseObject;
    };
}
export interface FooterState {
}
declare class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps);
    render(): JSX.Element;
    private transformNavigationsIntoTree;
    private buildNavTree;
}
export default Footer;
