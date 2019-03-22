/// <reference types="react" />
export interface BlogCardProps {
    title: string;
    text: string;
    color: string;
    textColor: string;
    img: LooseObject;
    special?: boolean;
}
export declare function BlogCard(props: BlogCardProps): JSX.Element;
