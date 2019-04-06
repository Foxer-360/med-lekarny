/// <reference types="react" />
export interface BlogCardProps {
    id: string;
    title: string;
    text: string;
    color: string;
    img?: LooseObject;
    special?: boolean;
}
export declare function BlogCard(props: BlogCardProps): JSX.Element;
