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
var Mobile = function (props) { return React.createElement(Responsive, __assign({}, props, { maxWidth: 576 })); };
var Tablet = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 577, maxWidth: 991 })); };
var Default = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 992 })); };
var PromotionsAndDiscounts = function (props) {
    var _a = props.data, title = _a.title, items = _a.items;
    var splitArray = function (array, size) {
        var result = [];
        for (var i = 0; i < Math.ceil(array.length / size); i++) {
            result[i] = (React.createElement("div", { className: 'prom-and-disc__list' }, array.slice((i * size), (i * size) + size)));
        }
        return result;
    };
    var autoPlay = false;
    if (items.length > 4) {
        autoPlay = true;
    }
    var arrayOfSlides = items && items.map(function (slide, i) { return (React.createElement("div", { key: i, className: 'prom-and-disc__list__item' },
        React.createElement(Link, { url: slide.url && slide.url.url }, slide.image && React.createElement(Media, { type: 'image', data: slide.image })))); });
    var arrayOfDesktopSlides = [];
    var arrayOfTabletSlides = [];
    var arrayOfMobiletSlides = [];
    if (items.length >= 3) {
        // Split an array of 3 elements
        arrayOfDesktopSlides = splitArray(arrayOfSlides, 3);
    }
    if (items.length > 2) {
        arrayOfTabletSlides = splitArray(arrayOfSlides, 2);
    }
    if (items.length > 1) {
        arrayOfMobiletSlides = splitArray(arrayOfSlides, 1);
    }
    return (React.createElement(List, { data: {} }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'prom-and-disc' },
            React.createElement("div", { className: "container" },
                title && React.createElement("h3", null, title) || React.createElement("div", { style: { height: 50 } }),
                React.createElement(Default, null,
                    React.createElement(Slider, { autoplay: autoPlay, showArrows: true, delay: 7000, showDots: false, slides: arrayOfDesktopSlides })),
                React.createElement(Tablet, null,
                    React.createElement(Slider, { autoplay: autoPlay, showArrows: true, delay: 7000, showDots: false, slides: arrayOfTabletSlides })),
                React.createElement(Mobile, null,
                    React.createElement(Slider, { autoplay: autoPlay, showArrows: true, delay: 7000, showDots: false, slides: arrayOfMobiletSlides })))));
    }));
};
export default PromotionsAndDiscounts;
//# sourceMappingURL=PromotionsAndDiscounts.js.map