/// <reference types="react" />
import 'react-alice-carousel/lib/alice-carousel.css';
interface PromotionPreview {
    title: string;
    description: string;
    date: string;
    titleURL: string;
    url: LooseObject;
}
export interface PromotionPreviewsProps {
    data: {
        promotionPreviews: PromotionPreview[];
    };
}
declare const PromotionPreviews: (props: PromotionPreviewsProps) => JSX.Element;
export default PromotionPreviews;
