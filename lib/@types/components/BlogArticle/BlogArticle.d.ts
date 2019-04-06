/// <reference types="react" />
export interface BlogArticleProps {
    data: {
        title: string;
        image: LooseObject;
        text: string;
    };
}
declare const BlogArticle: (props: BlogArticleProps) => JSX.Element;
export default BlogArticle;
