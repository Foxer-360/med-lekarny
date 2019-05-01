/// <reference types="react" />
interface PromotionPreview {
    title: string;
    description: string;
    date: string;
    titleUrl: string;
    url: LooseObject;
}
export interface PromotionPreviewsProps {
    data: {
        promotionPreviews: PromotionPreview[];
    };
}
declare const PromotionPreviews: (props: PromotionPreviewsProps) => JSX.Element;
export default PromotionPreviews;
