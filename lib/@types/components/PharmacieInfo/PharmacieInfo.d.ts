/// <reference types="react" />
export interface PharmacieInfoProps {
    data: {
        geo: string;
        phone: string;
        officeHours: string;
        transport: string;
        transportImage: LooseObject;
    };
}
declare const PharmacieInfo: (props: PharmacieInfoProps) => JSX.Element;
export default PharmacieInfo;
