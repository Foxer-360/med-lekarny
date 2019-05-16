"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Media_1 = require("@source/partials/Media");
var Link_1 = require("@source/partials/Link");
var ReactMarkdown = require("react-markdown");
var DiscountOffer = function (props) {
    var _a = props.data, discountText = _a.discountText, discountImage = _a.discountImage, couponText = _a.couponText, couponImage = _a.couponImage, promotionText = _a.promotionText, promotionImage = _a.promotionImage, productText = _a.productText, productImage = _a.productImage, productUrl = _a.productUrl;
    return (React.createElement("div", { className: 'discount-offer grid' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'discount-offer__list grid' },
                React.createElement("div", { className: 'discount-offer__list__item grid' },
                    discountText && React.createElement(ReactMarkdown, { source: discountText }),
                    discountImage && React.createElement(Media_1.default, { type: 'image', data: discountImage })),
                React.createElement("div", { className: 'discount-offer__list__item grid' },
                    couponText && React.createElement(ReactMarkdown, { source: couponText }),
                    couponImage && React.createElement(Media_1.default, { type: 'image', data: couponImage })),
                React.createElement("div", { className: 'discount-offer__list__item grid' },
                    promotionText && React.createElement(ReactMarkdown, { source: promotionText }),
                    promotionImage && React.createElement(Media_1.default, { type: 'image', data: promotionImage })),
                React.createElement(Link_1.default, __assign({}, productUrl),
                    React.createElement("div", { className: 'discount-offer__list__item grid' },
                        React.createElement("span", null, productText && productText),
                        productImage && React.createElement(Media_1.default, { type: 'image', data: productImage })))))));
};
exports.default = DiscountOffer;
//# sourceMappingURL=DiscountOffer.js.map