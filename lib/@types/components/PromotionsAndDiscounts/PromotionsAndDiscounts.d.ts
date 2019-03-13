/// <reference types="react" />
interface Item {
    image: LooseObject;
    url: LooseObject;
}
export interface PromotionsAndDiscountsProps {
    data: {
        title?: string;
        items: Item[];
    };
}
declare const PromotionsAndDiscounts: (props: PromotionsAndDiscountsProps) => JSX.Element;
export default PromotionsAndDiscounts;
