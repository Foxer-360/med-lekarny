import * as React from 'react';
import * as ReactMarkdown from 'react-markdown/with-html';

import Media from '../../partials/Media';
import Link from '../../partials/Link';

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
        <div className={'discount-offer__list row'}>
          
          <div className={'discount-offer__list__item col-12 col-xl-6'}>
            {discountText && <ReactMarkdown
              skipHtml={false}
              escapeHtml={false}
              source={discountText}
            />}
            {discountImage && <Media type={'image'} data={discountImage} />}
          </div>
          <div className={'discount-offer__list__item col-12 col-xl-6'}>
            {couponText && <ReactMarkdown
              skipHtml={false}
              escapeHtml={false}
              source={couponText}
            />}
            {couponImage && <Media type={'image'} data={couponImage} />}
          </div>
          <div className={'discount-offer__list__item col-12 col-xl-6'}>
            {promotionText && <ReactMarkdown
              skipHtml={false}
              escapeHtml={false}
              source={promotionText}
            />}
            {promotionImage && <Media type={'image'} data={promotionImage} />}
          </div>
          <div className={'discount-offer__list__item col-12 col-xl-6'}>
            <Link {...productUrl}>
              <span>{productText && productText}</span>
              {productImage && <Media type={'image'} data={productImage} />}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DiscountOffer;
