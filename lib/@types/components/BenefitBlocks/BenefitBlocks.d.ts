/// <reference types="react" />
interface Benefit {
    title: string;
    subtitle: string;
    icon: LooseObject;
    text: string;
    gradientText: string;
    logo: LooseObject;
    bottomText: string;
}
export interface BenefitBlocksProps {
    data: {
        title: string;
        benefits: Benefit[];
    };
}
declare const BenefitBlocks: (props: BenefitBlocksProps) => JSX.Element;
export default BenefitBlocks;
