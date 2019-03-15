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
import Media from '@source/partials/Media';
import Slider from '@source/partials/Slider';
import splitArray from '@source/helpers/splitArray';
var Mobile = function (props) { return React.createElement(Responsive, __assign({}, props, { maxWidth: 576 })); };
var Tablet = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 577, maxWidth: 991 })); };
var Default = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 992 })); };
var Gallery = function (props) {
    return (React.createElement(List, { data: props.data.slides || [] }, function (_a) {
        var slides = _a.data;
        var arrayOfSlides = (slides && slides.map(function (slide, i) { return (React.createElement("div", { className: 'gallery__list__item', key: i }, slide.image && React.createElement(Media, { type: 'image', data: slide.image }))); })) || [];
        var arrayOfDesktopSlides = [];
        var arrayOfTabletSlides = [];
        var arrayOfMobiletSlides = [];
        arrayOfDesktopSlides = splitArray(arrayOfSlides, 4, 'gallery__list');
        arrayOfTabletSlides = splitArray(arrayOfSlides, 2, 'gallery__list');
        arrayOfMobiletSlides = splitArray(arrayOfSlides, 1, 'gallery__list');
        return (React.createElement("div", { className: 'gallery' },
            React.createElement("div", { className: 'container' },
                React.createElement(Default, null,
                    React.createElement(Slider, { delay: 7000, showDots: false, slides: arrayOfDesktopSlides, autoplay: arrayOfSlides.length > 4 ? true : false, showArrows: arrayOfSlides.length > 4 ? true : false })),
                React.createElement(Tablet, null,
                    React.createElement(Slider, { delay: 7000, showDots: false, slides: arrayOfTabletSlides, autoplay: arrayOfSlides.length > 2 ? true : false, showArrows: arrayOfSlides.length > 2 ? true : false })),
                React.createElement(Mobile, null,
                    React.createElement(Slider, { delay: 7000, showDots: false, slides: arrayOfMobiletSlides, autoplay: arrayOfSlides.length > 1 ? true : false, showArrows: arrayOfSlides.length > 1 ? true : false })))));
    }));
};
export default Gallery;
//# sourceMappingURL=Gallery.js.map