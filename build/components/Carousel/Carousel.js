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
var NextArrow_1 = require("../../partials/NextArrow");
var PrevArrow_1 = require("../../partials/PrevArrow");
var CarouselImageText_1 = require("./components/CarouselImageText");
var utils_1 = require("./utils");
var Carousel = function (props) { return (React.createElement(List_1.default, { data: props.data.slides || [] }, function (_a) {
    var slides = _a.data;
    var arrayOfSlides = (slides &&
        slides.map(function (slide, i) {
            var title = slide.title, subTitle = slide.subTitle, image = slide.image, description = slide.description, isCentred = slide.isCentred, imageBackgroundColor = slide.imageBackgroundColor, imageOnRight = slide.imageOnRight, secondaryImage = slide.secondaryImage, textImage = slide.textImage, textBackgroundColor = slide.textBackgroundColor, isTextWhite = slide.isTextWhite, url = slide.url, buttonTitle = slide.buttonTitle;
            return (React.createElement(CarouselImageText_1.default, { key: "imageTextSection--" + i, title: title, subtitle: subTitle, image: image, secondaryImage: secondaryImage, imagePosition: utils_1.getImagePosition(imageOnRight), text: description, centerText: isCentred, imageBackgroundColor: imageBackgroundColor, textBackgroundColor: textBackgroundColor, isTextWhite: isTextWhite, textImage: textImage, url: url, buttonTitle: buttonTitle }));
        })) ||
        [];
    var settings = {
        speed: 1000,
        dots: true,
        arrows: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: React.createElement(NextArrow_1.default, { classes: 'carousel--nextArrow' }),
        prevArrow: React.createElement(PrevArrow_1.default, { classes: 'carousel--prevArrow' }),
    };
    return (React.createElement("div", { className: 'carousel' },
        React.createElement(react_slick_1.default, __assign({}, settings), arrayOfSlides)));
})); };
exports.default = Carousel;
//# sourceMappingURL=Carousel.js.map