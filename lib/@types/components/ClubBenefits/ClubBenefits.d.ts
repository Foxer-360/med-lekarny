/// <reference types="react" />
interface Benefit {
    title: string;
}
export interface ClubBenefitsProps {
    data: {
        buttonTitle: string;
        buttonUrl: LooseObject;
        conditionsUrl: LooseObject;
        benefits: Benefit[];
    };
}
declare const ClubBenefits: (props: ClubBenefitsProps) => JSX.Element;
export default ClubBenefits;
