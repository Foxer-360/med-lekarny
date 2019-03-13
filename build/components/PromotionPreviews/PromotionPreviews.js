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
var Mobile = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 0, maxWidth: 768 })); };
var Tablet = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 769, maxWidth: 1249 })); };
var Default = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 1250 })); };
var PromotionPreviews = function (props) {
    var promotionPreviews = props.data.promotionPreviews;
    var splitArray = function (array, size) {
        var result = [];
        for (var i = 0; i < Math.ceil(array.length / size); i++) {
            result[i] = (React.createElement("div", { className: 'promotion-previews__list' }, array.slice((i * size), (i * size) + size)));
        }
        return result;
    };
    var autoPlay = false;
    if (promotionPreviews.length > 3) {
        autoPlay = true;
    }
    var arrayOfSlides = promotionPreviews && promotionPreviews.map(function (slide, i) { return (React.createElement("div", { key: i, className: 'promotion-previews__list__item grid' },
        React.createElement("div", { className: 'promotion-previews__list__item__left' },
            React.createElement("p", { className: 'promotion-previews__list__item__left__date' }, slide.date && slide.date)),
        React.createElement("div", { className: 'promotion-previews__list__item__right' },
            React.createElement("p", { className: 'promotion-previews__list__item__right__title' }, slide.title && slide.title),
            React.createElement("p", { className: 'promotion-previews__list__item__right__description' }, slide.description && slide.description),
            React.createElement(Link, { url: slide.url && slide.url.url, className: 'promotion-previews__list__item__right__url' }, slide.titleUrl && slide.titleUrl)))); });
    var arrayOfDesktopSlides = [];
    var arrayOfTabletSlides = [];
    var arrayOfMobiletSlides = [];
    if (promotionPreviews.length >= 3) {
        // Split an array of 3 elements
        arrayOfDesktopSlides = splitArray(arrayOfSlides, 3);
    }
    if (promotionPreviews.length > 2) {
        arrayOfTabletSlides = splitArray(arrayOfSlides, 2);
    }
    if (promotionPreviews.length > 1) {
        arrayOfMobiletSlides = splitArray(arrayOfSlides, 1);
    }
    return (React.createElement(List, { data: {} }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'promotions' },
            React.createElement("div", { className: 'container' },
                React.createElement(Default, null,
                    React.createElement(Slider, { autoplay: autoPlay, showArrows: false, delay: 7000, showDots: false, slides: arrayOfDesktopSlides })),
                React.createElement(Tablet, null,
                    React.createElement(Slider, { autoplay: autoPlay, showArrows: false, delay: 7000, showDots: false, slides: arrayOfTabletSlides })),
                React.createElement(Mobile, null,
                    React.createElement(Slider, { autoplay: autoPlay, showArrows: false, delay: 7000, showDots: false, slides: arrayOfMobiletSlides })))));
    }));
};
export default PromotionPreviews;
//# sourceMappingURL=PromotionPreviews.js.map