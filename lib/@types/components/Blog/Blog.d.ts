import * as React from 'react';
interface BlogItem {
    title: string;
    text: string;
    img: LooseObject;
    color: string;
    textColor: string;
    special?: boolean;
}
export interface BlogProps {
    data: {
        title: string;
        displaySearch: boolean;
        blogItems: BlogItem[];
    };
}
export interface BlogState {
    showMore: boolean;
    blogItems: any;
    sixBlogItems: any;
}
export default class Blog extends React.Component<BlogProps, BlogState> {
    constructor(props: BlogProps);
    renderSixItems(data: any): any[];
    componentWillReceiveProps: (nextProps: any) => void;
    render(): JSX.Element;
}
export {};
