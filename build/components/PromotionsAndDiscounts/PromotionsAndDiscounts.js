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
import Media from '@source/partials/Media';
import Slider from '@source/partials/Slider';
import splitArray from '@source/helpers/splitArray';
var Mobile = function (props) { return React.createElement(Responsive, __assign({}, props, { maxWidth: 576 })); };
var Tablet = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 577, maxWidth: 991 })); };
var Default = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 992 })); };
var PromotionsAndDiscounts = function (props) {
    return (React.createElement(List, { data: props.data.items || [] }, function (_a) {
        var items = _a.data;
        var arrayOfSlides = (items && items.map(function (slide, i) { return (React.createElement("div", { key: i, className: 'prom-and-disc__list__item' },
            React.createElement(Link, { url: slide.url && slide.url.url }, slide.image && React.createElement(Media, { type: 'image', data: slide.image })))); })) || [];
        var arrayOfDesktopSlides = [];
        var arrayOfTabletSlides = [];
        var arrayOfMobiletSlides = [];
        arrayOfDesktopSlides = splitArray(arrayOfSlides, 3, 'prom-and-disc__list');
        arrayOfTabletSlides = splitArray(arrayOfSlides, 2, 'prom-and-disc__list');
        arrayOfMobiletSlides = splitArray(arrayOfSlides, 1, 'prom-and-disc__list');
        return (React.createElement("div", { className: 'prom-and-disc' },
            React.createElement("div", { className: "container" },
                props.data.title && React.createElement("h3", null, props.data.title) || React.createElement("div", { style: { height: 50 } }),
                React.createElement(Default, null,
                    React.createElement(Slider, { delay: 7000, showDots: false, slides: arrayOfDesktopSlides, autoplay: arrayOfSlides.length > 3 ? true : false, showArrows: arrayOfSlides.length > 3 ? true : false })),
                React.createElement(Tablet, null,
                    React.createElement(Slider, { delay: 7000, showDots: false, slides: arrayOfTabletSlides, autoplay: arrayOfSlides.length > 2 ? true : false, showArrows: arrayOfSlides.length > 2 ? true : false })),
                React.createElement(Mobile, null,
                    React.createElement(Slider, { delay: 7000, showDots: false, slides: arrayOfMobiletSlides, autoplay: arrayOfSlides.length > 1 ? true : false, showArrows: arrayOfSlides.length > 1 ? true : false })))));
    }));
};
export default PromotionsAndDiscounts;
//# sourceMappingURL=PromotionsAndDiscounts.js.map