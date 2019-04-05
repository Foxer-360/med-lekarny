var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
import ReactMarkdown from 'react-markdown';
var DiscountOffer = function (props) {
    var _a = props.data, discountText = _a.discountText, discountImage = _a.discountImage, couponText = _a.couponText, couponImage = _a.couponImage, promotionText = _a.promotionText, promotionImage = _a.promotionImage, productText = _a.productText, productImage = _a.productImage, productUrl = _a.productUrl;
    return (React.createElement("div", { className: 'discount-offer grid' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'discount-offer__list grid' },
                React.createElement("div", { className: 'discount-offer__list__item grid' },
                    discountText && React.createElement(ReactMarkdown, { source: discountText }),
                    discountImage && React.createElement(Media, { type: 'image', data: discountImage })),
                React.createElement("div", { className: 'discount-offer__list__item grid' },
                    couponText && React.createElement(ReactMarkdown, { source: couponText }),
                    couponImage && React.createElement(Media, { type: 'image', data: couponImage })),
                React.createElement("div", { className: 'discount-offer__list__item grid' },
                    promotionText && React.createElement(ReactMarkdown, { source: promotionText }),
                    promotionImage && React.createElement(Media, { type: 'image', data: promotionImage })),
                React.createElement(Link, __assign({}, productUrl),
                    React.createElement("div", { className: 'discount-offer__list__item grid' },
                        React.createElement("span", null, productText && productText),
                        productImage && React.createElement(Media, { type: 'image', data: productImage })))))));
};
export default DiscountOffer;
//# sourceMappingURL=DiscountOffer.js.map