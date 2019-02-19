import * as React from 'react';
import Media from '@source/partials/Media';

interface Methods {
  image: LooseObject;
}

export interface PaymentMethodsProps {
  data: {
    title: string;
    methods: Methods[];
  };
}

const PaymentMethods = (props: PaymentMethodsProps) => {
  const { title, methods } = props.data;

  return (
    <div className={'payment-methods'}>
      <div className={'container'}>
        {title && <h3>{title}</h3>}
        <div className={'payment-methods__list grid'}>
          {methods && methods.map((method, i) => (
            <div key={i} className={'payment-methods__list__item'}>
              {method.image && <Media key={i} type={'image'} data={method.image} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;