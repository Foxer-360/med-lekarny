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
var Mobile = function (props) { return React.createElement(Responsive, __assign({}, props, { maxWidth: 576 })); };
var Tablet = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 577, maxWidth: 991 })); };
var Default = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 992 })); };
var Gallery = function (props) {
    var slides = props.data.slides;
    var splitArray = function (array, size) {
        var result = [];
        for (var i = 0; i < Math.ceil(array.length / size); i++) {
            result[i] = (React.createElement("div", { className: 'gallery__list' }, array.slice((i * size), (i * size) + size)));
        }
        return result;
    };
    var autoPlay = false;
    if (slides.length > 4) {
        autoPlay = true;
    }
    var arrayOfSlides = slides && slides.map(function (slide, i) { return (React.createElement("div", { className: 'gallery__list__item', key: i }, slide.image && React.createElement(Media, { type: 'image', data: slide.image }))); });
    var arrayOfDesktopSlides = [];
    var arrayOfTabletSlides = [];
    var arrayOfMobiletSlides = [];
    if (slides.length > 4) {
        // Split an array of 4 elements
        arrayOfDesktopSlides = splitArray(arrayOfSlides, 4);
    }
    if (slides.length > 2) {
        arrayOfTabletSlides = splitArray(arrayOfSlides, 2);
    }
    if (slides.length > 1) {
        arrayOfMobiletSlides = splitArray(arrayOfSlides, 1);
        console.log(arrayOfMobiletSlides);
    }
    return (React.createElement(List, { data: {} }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'gallery' },
            React.createElement("div", { className: 'container' },
                React.createElement(Default, null,
                    React.createElement(Slider, { autoplay: autoPlay, showArrows: true, delay: 500000, showDots: false, slides: arrayOfDesktopSlides })),
                React.createElement(Tablet, null,
                    React.createElement(Slider, { autoplay: autoPlay, showArrows: true, delay: 500000, showDots: false, slides: arrayOfTabletSlides })),
                React.createElement(Mobile, null,
                    React.createElement(Slider, { autoplay: autoPlay, showArrows: true, delay: 500000, showDots: false, slides: arrayOfMobiletSlides })))));
    }));
};
export default Gallery;
//# sourceMappingURL=Gallery.js.map