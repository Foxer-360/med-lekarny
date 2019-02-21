import * as React from 'react';
interface BlogItem {
    title: string;
    text: string;
    img: LooseObject;
    color: string;
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
}
export default class Blog extends React.Component<BlogProps, BlogState> {
    constructor(props: BlogProps);
    render(): JSX.Element;
}
export {};
