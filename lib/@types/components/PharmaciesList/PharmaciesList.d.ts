/// <reference types="react" />
interface Pharmacie {
    name: string;
    image: LooseObject;
    description: string;
    address: string;
    district: string;
    phone: string;
    transport: string;
    transportImage: LooseObject;
    station: string;
    services: string;
}
export interface PharmaciesListProps {
    data: {
        pharmacies: Pharmacie[];
    };
}
declare const PharmaciesList: (props: PharmaciesListProps) => JSX.Element;
export default PharmaciesList;
