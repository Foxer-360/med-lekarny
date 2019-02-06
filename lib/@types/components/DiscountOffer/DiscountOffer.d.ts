/// <reference types="react" />
export interface DiscountOfferProps {
    data: {
        discountText: string;
        discountImage: LooseObject;
        couponText: string;
        couponImage: LooseObject;
        promotionText: string;
        promotionImage: LooseObject;
        productText: string;
        productImage: LooseObject;
        productUrl?: LooseObject;
    };
}
declare const DiscountOffer: (props: DiscountOfferProps) => JSX.Element;
export default DiscountOffer;
