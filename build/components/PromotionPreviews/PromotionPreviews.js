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
var react_responsive_1 = require("react-responsive");
var List_1 = require("../List");
var Link_1 = require("@source/partials/Link");
var Slider_1 = require("@source/partials/Slider");
var splitArray_1 = require("@source/helpers/splitArray");
var Mobile = function (props) { return React.createElement(react_responsive_1.default, __assign({}, props, { minWidth: 0, maxWidth: 768 })); };
var Tablet = function (props) { return React.createElement(react_responsive_1.default, __assign({}, props, { minWidth: 769, maxWidth: 1249 })); };
var Default = function (props) { return React.createElement(react_responsive_1.default, __assign({}, props, { minWidth: 1250 })); };
var PromotionPreviews = function (props) {
    return (React.createElement(List_1.default, { data: props.data.promotionPreviews || [] }, function (_a) {
        var promotionPreviews = _a.data;
        var arrayOfSlides = (promotionPreviews && promotionPreviews.map(function (slide, i) { return (React.createElement("div", { key: i, className: 'promotion-previews__list__item grid' },
            React.createElement("div", { className: 'promotion-previews__list__item__left' },
                React.createElement("p", { className: 'promotion-previews__list__item__left__date' }, slide.date)),
            React.createElement("div", { className: 'promotion-previews__list__item__right' },
                React.createElement("div", { className: 'promotion-previews__list__item__right__wrapper' },
                    React.createElement("p", { className: 'promotion-previews__list__item__right__title' }, slide.title),
                    React.createElement("p", { className: 'promotion-previews__list__item__right__description' }, slide.description),
                    React.createElement(Link_1.default, __assign({}, slide.url, { className: 'promotion-previews__list__item__right__url' }), slide.titleUrl))))); })) || [];
        var arrayOfDesktopSlides = [];
        var arrayOfTabletSlides = [];
        var arrayOfMobiletSlides = [];
        arrayOfDesktopSlides = splitArray_1.default(arrayOfSlides, 3, 'promotion-previews__list');
        arrayOfTabletSlides = splitArray_1.default(arrayOfSlides, 2, 'promotion-previews__list');
        arrayOfMobiletSlides = splitArray_1.default(arrayOfSlides, 1, 'promotion-previews__list');
        return (React.createElement("div", { className: 'promotions' },
            React.createElement("div", { className: 'container' },
                React.createElement(Default, null,
                    React.createElement(Slider_1.default, { delay: 7000, showDots: false, showArrows: false, slides: arrayOfDesktopSlides, autoplay: arrayOfSlides.length > 3 ? true : false })),
                React.createElement(Tablet, null,
                    React.createElement(Slider_1.default, { showArrows: false, delay: 7000, showDots: false, slides: arrayOfTabletSlides, autoplay: arrayOfSlides.length > 2 ? true : false })),
                React.createElement(Mobile, null,
                    React.createElement(Slider_1.default, { delay: 7000, showDots: false, showArrows: false, slides: arrayOfMobiletSlides, autoplay: arrayOfSlides.length > 1 ? true : false })))));
    }));
};
exports.default = PromotionPreviews;
//# sourceMappingURL=PromotionPreviews.js.map