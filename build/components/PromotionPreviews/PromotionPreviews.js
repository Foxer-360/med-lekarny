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
var Link_1 = require("../../partials/Link");
var PromotionPreviews = function (props) {
    return (React.createElement(List_1.default, { data: props.data.promotionPreviews || [] }, function (_a) {
        var promotionPreviews = _a.data;
        var arrayOfSlides = (promotionPreviews && promotionPreviews.map(function (slide, i) { return (React.createElement("div", { key: i },
            React.createElement("div", { className: 'promotion-previews__list__item row' },
                React.createElement("div", { className: 'promotion-previews__list__item__left col-4 col-sm-3 col-md-4 col-lg-3 col-xl-4' },
                    React.createElement("p", { className: 'promotion-previews__list__item__left__date' }, slide.date)),
                React.createElement("div", { className: 'promotion-previews__list__item__right col-8 col-sm-9 col-md-8 col-lg-9 col-xl-8' },
                    React.createElement("div", { className: 'promotion-previews__list__item__right__wrapper' },
                        React.createElement("p", { className: 'promotion-previews__list__item__right__title' }, slide.title),
                        React.createElement("p", { className: 'promotion-previews__list__item__right__description' }, slide.description),
                        React.createElement(Link_1.default, __assign({}, slide.url, { className: 'promotion-previews__list__item__right__url' }), slide.titleUrl)))))); })) || [];
        var settings = {
            speed: 3000,
            dots: false,
            arrows: false,
            autoplay: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: { slidesToShow: 2 }
                },
                {
                    breakpoint: 768,
                    settings: { slidesToShow: 1 }
                }
            ]
        };
        return (React.createElement("div", { className: 'promotions' },
            React.createElement("div", { className: 'container' },
                React.createElement(react_slick_1.default, __assign({}, settings), arrayOfSlides))));
    }));
};
exports.default = PromotionPreviews;
//# sourceMappingURL=PromotionPreviews.js.map