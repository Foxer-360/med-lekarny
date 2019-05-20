import * as React from 'react';

import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
import * as ReactMarkdown from 'react-markdown';

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

const DiscountOffer = (props: DiscountOfferProps) => {
  const
  {
    discountText,
    discountImage,
    couponText,
    couponImage,
    promotionText,
    promotionImage,
    productText,
    productImage,
    productUrl
  } = props.data;

  return (
    <div className={'discount-offer'}>
      <div className="container">
        <div className={'discount-offer__list grid'}>
          <div className={'discount-offer__list__item grid'}>
            {discountText && <ReactMarkdown source={discountText} />}
            {discountImage && <Media type={'image'} data={discountImage} />}
          </div>
          <div className={'discount-offer__list__item grid'}>
            {couponText && <ReactMarkdown source={couponText} />}
            {couponImage && <Media type={'image'} data={couponImage} />}
          </div>
          <div className={'discount-offer__list__item grid'}>
            {promotionText && <ReactMarkdown source={promotionText} />}
            {promotionImage && <Media type={'image'} data={promotionImage} />}
          </div>
          <Link {...productUrl}>
            <div className={'discount-offer__list__item grid'}>
              <span>{productText && productText}</span>
              {productImage && <Media type={'image'} data={productImage} />}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscountOffer;
