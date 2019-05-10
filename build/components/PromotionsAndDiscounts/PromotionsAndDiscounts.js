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
import Slider from 'react-slick';
import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
var PromotionsAndDiscounts = function (props) {
    return (React.createElement(List, { data: props.data.items || [] }, function (_a) {
        var items = _a.data;
        var arrayOfSlides = (items && items.map(function (slide, i) { return (React.createElement("div", { key: i },
            React.createElement(Link, __assign({}, slide.url), slide.image && React.createElement(Media, { type: 'image', data: slide.image })))); })) || [];
        var settings = {
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            dots: false,
            pauseOnHover: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: { slidesToShow: 2 }
                },
                {
                    breakpoint: 600,
                    settings: { slidesToShow: 1 }
                }
            ]
        };
        return (React.createElement("div", { className: 'prom-and-disc' },
            React.createElement("div", { className: "container" },
                props.data.title && React.createElement("h3", null, props.data.title) || React.createElement("div", { style: { height: 50 } }),
                React.createElement(Slider, __assign({}, settings), arrayOfSlides))));
    }));
};
export default PromotionsAndDiscounts;
//# sourceMappingURL=PromotionsAndDiscounts.js.map