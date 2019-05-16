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
var Media_1 = require("@source/partials/Media");
var Slider_1 = require("@source/partials/Slider");
var splitArray_1 = require("@source/helpers/splitArray");
var Mobile = function (props) { return React.createElement(react_responsive_1.default, __assign({}, props, { maxWidth: 576 })); };
var Tablet = function (props) { return React.createElement(react_responsive_1.default, __assign({}, props, { minWidth: 577, maxWidth: 991 })); };
var Default = function (props) { return React.createElement(react_responsive_1.default, __assign({}, props, { minWidth: 992 })); };
var Gallery = function (props) {
    return (React.createElement(List_1.default, { data: props.data.slides || [] }, function (_a) {
        var slides = _a.data;
        var arrayOfSlides = (slides && slides.map(function (slide, i) { return (React.createElement("div", { className: 'gallery__list__item', key: i }, slide.image && React.createElement(Media_1.default, { type: 'image', data: slide.image }))); })) || [];
        var arrayOfDesktopSlides = [];
        var arrayOfTabletSlides = [];
        var arrayOfMobiletSlides = [];
        arrayOfDesktopSlides = splitArray_1.default(arrayOfSlides, 4, 'gallery__list');
        arrayOfTabletSlides = splitArray_1.default(arrayOfSlides, 2, 'gallery__list');
        arrayOfMobiletSlides = splitArray_1.default(arrayOfSlides, 1, 'gallery__list');
        return (React.createElement("div", { className: 'gallery' },
            React.createElement("div", { className: 'container' },
                React.createElement(Default, null,
                    React.createElement(Slider_1.default, { delay: 7000, showDots: false, slides: arrayOfDesktopSlides, autoplay: arrayOfSlides.length > 4 ? true : false, showArrows: arrayOfSlides.length > 4 ? true : false })),
                React.createElement(Tablet, null,
                    React.createElement(Slider_1.default, { delay: 7000, showDots: false, slides: arrayOfTabletSlides, autoplay: arrayOfSlides.length > 2 ? true : false, showArrows: arrayOfSlides.length > 2 ? true : false })),
                React.createElement(Mobile, null,
                    React.createElement(Slider_1.default, { delay: 7000, showDots: false, slides: arrayOfMobiletSlides, autoplay: arrayOfSlides.length > 1 ? true : false, showArrows: arrayOfSlides.length > 1 ? true : false })))));
    }));
};
exports.default = Gallery;
//# sourceMappingURL=Gallery.js.map