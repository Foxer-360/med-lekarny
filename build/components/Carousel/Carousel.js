"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Media_1 = require("../../partials/Media");
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
    function Carousel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            slideIndex: 0,
            updateCount: 0
        };
        _this.slider = React.createRef();
        return _this;
    }
    Carousel.prototype.render = function () {
        var _this = this;
        var displayOnTop = this.props.data.displayOnTop;
        return (React.createElement(List_1.default, { data: this.props.data.slides || [] }, function (_a) {
            var slides = _a.data;
            var arrayOfSlides = (slides && slides.map(function (slide, i) { return (React.createElement("div", { key: i, className: 'carousel__slide' },
                React.createElement("div", { className: "carousel__slide__item" },
                    React.createElement(Link_1.default, __assign({}, slide.url),
                        React.createElement(Media_1.default, { type: 'image', data: slide.image }))))); })) || [];
            var settings = {
                speed: 1000,
                dots: true,
                arrows: false,
                autoplay: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnHover: true,
                beforeChange: function (current, next) { return _this.setState({ slideIndex: next }); },
                afterChange: function () { return _this.setState(function (state) { return ({ updateCount: state.updateCount + 1 }); }); }
            };
            return (React.createElement("div", { className: "carousel " + (displayOnTop ? 'sliderAtTop' : '') },
                React.createElement(react_slick_1.default, __assign({ ref: function (slider) { return (_this.slider = slider); } }, settings), arrayOfSlides),
                React.createElement("div", { className: 'carousel__titles' },
                    React.createElement("ul", { className: 'carousel__titles__list' }, slides && slides.map(function (slide, i) { return (React.createElement("li", { key: i, onClick: function () { return _this.slider.slickGoTo(i); }, className: 'carousel__titles__list__item', style: i === _this.state.slideIndex ? {
                            color: '#3eac49',
                            backgroundColor: 'white',
                            boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
                            borderBottom: 'none !important'
                        } : {} },
                        React.createElement("i", null, slide.title))); })))));
        }));
    };
    return Carousel;
}(React.Component));
exports.default = Carousel;
//# sourceMappingURL=Carousel.js.map