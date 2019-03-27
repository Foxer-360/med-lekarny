/// <reference types="react" />
interface Pharmacie {
    image?: LooseObject;
    pharmacieUrl?: LooseObject;
    address: string;
    addressUrl?: LooseObject;
    title: string;
    text: string;
}
export interface PharmaciesProps {
    data: {
        pharmacies: Pharmacie[];
    };
}
declare const Pharmacies: (props: PharmaciesProps) => JSX.Element;
export default Pharmacies;
