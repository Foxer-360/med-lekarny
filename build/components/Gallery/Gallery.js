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
var react_slick_1 = require("react-slick");
var List_1 = require("../List");
var Media_1 = require("../../partials/Media");
var Gallery = function (props) {
    return (React.createElement(List_1.default, { data: props.data.slides || [] }, function (_a) {
        var slides = _a.data;
        var arrayOfSlides = (slides && slides.map(function (slide, i) { return (React.createElement("div", { key: i },
            React.createElement("div", { className: 'gallery__item' }, slide.image && React.createElement(Media_1.default, { type: 'image', data: slide.image })))); })) || [];
        var settings = {
            speed: 1000,
            dots: false,
            arrows: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: { slidesToShow: 3 }
                },
                {
                    breakpoint: 992,
                    settings: { slidesToShow: 2 }
                },
                {
                    breakpoint: 768,
                    settings: { slidesToShow: 1 }
                }
            ]
        };
        return (React.createElement("div", { className: 'gallery' },
            React.createElement("div", { className: 'container' },
                React.createElement(react_slick_1.default, __assign({}, settings), arrayOfSlides))));
    }));
};
exports.default = Gallery;
//# sourceMappingURL=Gallery.js.map