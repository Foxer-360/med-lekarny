/// <reference types="react" />
interface Methods {
    image: LooseObject;
}
export interface PaymentMethodsProps {
    data: {
        title: string;
        methods: Methods[];
    };
}
declare const PaymentMethods: (props: PaymentMethodsProps) => JSX.Element;
export default PaymentMethods;
