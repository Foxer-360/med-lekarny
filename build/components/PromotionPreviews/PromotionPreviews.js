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
import Responsive from 'react-responsive';
import List from '../List';
import Link from '@source/partials/Link';
import Slider from '@source/partials/Slider';
import splitArray from '@source/helpers/splitArray';
var Mobile = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 0, maxWidth: 768 })); };
var Tablet = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 769, maxWidth: 1249 })); };
var Default = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 1250 })); };
var PromotionPreviews = function (props) {
    return (React.createElement(List, { data: props.data.promotionPreviews || [] }, function (_a) {
        var promotionPreviews = _a.data;
        var arrayOfSlides = (promotionPreviews && promotionPreviews.map(function (slide, i) { return (React.createElement("div", { key: i, className: 'promotion-previews__list__item grid' },
            React.createElement("div", { className: 'promotion-previews__list__item__left' },
                React.createElement("p", { className: 'promotion-previews__list__item__left__date' }, slide.date)),
            React.createElement("div", { className: 'promotion-previews__list__item__right' },
                React.createElement("p", { className: 'promotion-previews__list__item__right__title' }, slide.title),
                React.createElement("p", { className: 'promotion-previews__list__item__right__description' }, slide.description),
                React.createElement(Link, { url: slide.url && slide.url.url, className: 'promotion-previews__list__item__right__url' }, slide.titleUrl)))); })) || [];
        var arrayOfDesktopSlides = [];
        var arrayOfTabletSlides = [];
        var arrayOfMobiletSlides = [];
        arrayOfDesktopSlides = splitArray(arrayOfSlides, 3, 'promotion-previews__list');
        arrayOfTabletSlides = splitArray(arrayOfSlides, 2, 'promotion-previews__list');
        arrayOfMobiletSlides = splitArray(arrayOfSlides, 1, 'promotion-previews__list');
        return (React.createElement("div", { className: 'promotions' },
            React.createElement("div", { className: 'container' },
                React.createElement(Default, null,
                    React.createElement(Slider, { delay: 7000, showDots: false, showArrows: false, slides: arrayOfDesktopSlides, autoplay: arrayOfSlides.length > 3 ? true : false })),
                React.createElement(Tablet, null,
                    React.createElement(Slider, { showArrows: false, delay: 7000, showDots: false, slides: arrayOfTabletSlides, autoplay: arrayOfSlides.length > 2 ? true : false })),
                React.createElement(Mobile, null,
                    React.createElement(Slider, { delay: 7000, showDots: false, showArrows: false, slides: arrayOfMobiletSlides, autoplay: arrayOfSlides.length > 1 ? true : false })))));
    }));
};
export default PromotionPreviews;
//# sourceMappingURL=PromotionPreviews.js.map