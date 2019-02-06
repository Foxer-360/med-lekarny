/// <reference types="react" />
import { Hero, Blog, Header, Footer, Carousel } from '../../components';
import * as resources from './resources';
/**
 *
 */
declare class ComponentsService {
    Types: LooseObject<string>;
    /***/
    getAllowedTypes(): string[];
    /***/
    getComponent(type: string): MapConstructor | typeof Footer | typeof Header | typeof Hero | ((props: import("../../components/InfoBoxes/InfoBoxes").InfoBoxesProps) => JSX.Element) | ((props: import("../../components/Reviews/Reviews").ReviewsProps) => JSX.Element) | ((props: import("../../components/TextBlock/TextBlock").TextBlockProps) => JSX.Element) | ((props: import("../../components/PharmaciesList/PharmaciesList").PharmaciesListProps) => JSX.Element) | ((props: import("../../components/InfoRectangles/InfoRectangles").InfoRectanglesProps) => JSX.Element) | ((props: import("../../components/PharmacieInfo/PharmacieInfo").PharmacieInfoProps) => JSX.Element) | typeof Blog | ((props: import("../../components/Pharmacies/Pharmacies").PharmaciesProps) => JSX.Element) | ((props: import("../../components/MenuBlocks/MenuBlocks").MenuBlocksProps) => JSX.Element) | ((props: import("../../components/PromotionPreviews/PromotionPreviews").PromotionPreviewsProps) => JSX.Element) | typeof Carousel | ((props: import("../../components/Headline/Headline").HeadlineProps) => JSX.Element) | ((props: import("../../components/CustomInfoBoxes/CustomInfoBoxes").CustomInfoBoxesProps) => JSX.Element) | ((props: import("../../components/Gallery/Gallery").GalleryProps) => JSX.Element) | ((props: import("../../components/DiscountOffer/DiscountOffer").DiscountOfferProps) => JSX.Element) | ((props: import("../../components/PromotionsAndDiscounts/PromotionsAndDiscounts").PromotionsAndDiscountsProps) => JSX.Element) | ((props: import("../../components/Partners/Partners").PartnersProps) => JSX.Element) | ((props: import("../../components/PaymentMethods/PaymentMethods").PaymentMethodsProps) => JSX.Element) | ((props: import("../../components/ClubBenefits/ClubBenefits").ClubBenefitsProps) => JSX.Element) | ((props: import("../../components/BenefitBlocks/BenefitBlocks").BenefitBlocksProps) => JSX.Element) | ((props: import("../../components/MiniBoxes/MiniBoxes").MiniBoxesProps) => JSX.Element);
    /***/
    getComponentResource(type: string): typeof resources.footer;
    getForm(type: string): () => JSX.Element;
}
export default ComponentsService;
