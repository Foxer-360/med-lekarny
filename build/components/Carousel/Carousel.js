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
var List_1 = require("../List");
var Link_1 = require("../../partials/Link");
var Media_1 = require("../../partials/Media");
var Dots_1 = require("./components/Dots");
var LeftArrow_1 = require("./components/LeftArrow");
var RightArrow_1 = require("./components/RightArrow");
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
    function Carousel(props) {
        var _this = _super.call(this, props) || this;
        _this.componentWillReceiveProps = function (nextProps) {
            if (_this.state.slides !== nextProps.data.slides) {
                _this.setState({ slides: nextProps.data.slides });
            }
        };
        _this.componentWillUnmount = function () {
            if (!_this.state.pause && _this.state.autoplay) {
                clearInterval(_this.state.interval);
            }
        };
        _this.goToNextSlide = function () {
            if (_this.state.pause) {
                return;
            }
            clearInterval(_this.state.interval);
            if (_this.state.currentIndex === _this.state.slides.length - 1) {
                return _this.setState({
                    currentIndex: 0,
                    translateValue: 0,
                    interval: setInterval(_this.goToNextSlide, _this.state.delay)
                });
            }
            _this.setState({
                currentIndex: _this.state.currentIndex + 1,
                translateValue: _this.state.translateValue + -(_this.slideWidth()),
                interval: setInterval(_this.goToNextSlide, _this.state.delay)
            });
        };
        _this.goToPrevSlide = function () {
            if (_this.state.pause) {
                return;
            }
            clearInterval(_this.state.interval);
            if (_this.state.currentIndex === 0) {
                return _this.setState({
                    currentIndex: _this.state.slides.length - 1,
                    translateValue: (_this.state.slides.length - 1) * -(_this.slideWidth()),
                    interval: setInterval(_this.goToNextSlide, _this.state.delay)
                });
            }
            _this.setState(function (prevState) { return ({
                currentIndex: prevState.currentIndex - 1,
                translateValue: prevState.translateValue + _this.slideWidth(),
                interval: setInterval(_this.goToNextSlide, _this.state.delay)
            }); });
        };
        _this.goTo = function (index) {
            if (index === _this.state.currentIndex) {
                return;
            }
            clearInterval(_this.state.interval);
            if (index > _this.state.currentIndex) {
                _this.setState({
                    currentIndex: index,
                    translateValue: index * -(_this.slideWidth()),
                    interval: setInterval(_this.goToNextSlide, _this.state.delay)
                });
            }
            else {
                _this.setState({
                    currentIndex: index,
                    translateValue: _this.state.translateValue + (_this.state.currentIndex - index) * (_this.slideWidth()),
                    interval: setInterval(_this.goToNextSlide, _this.state.delay)
                });
            }
        };
        _this.slideWidth = function () {
            if (document.querySelector('.slider__slide')) {
                return document.querySelector('.slider__slide').clientWidth;
            }
            else {
                var iFrameWidth = document.querySelector('iframe').clientWidth;
                // fix for desktop backoffice: 75% width because '.slider__slide' 75% too (Not whole Carousel)
                return (iFrameWidth / 100) * 75;
            }
        };
        _this.state = {
            delay: 10000,
            autoplay: true,
            showDots: true,
            interval: null,
            currentIndex: 0,
            translateValue: 0,
            showArrows: false,
            pause: false,
            slides: _this.props.data.slides
        };
        return _this;
    }
    Carousel.prototype.componentDidMount = function () {
        if (this.state.autoplay && !this.state.pause) {
            var interval = setInterval(this.goToNextSlide, this.state.delay);
            this.setState({ interval: interval });
        }
    };
    Carousel.prototype.pause = function (e) {
        e.preventDefault();
        if (this.state.autoplay && !this.state.pause) {
            clearInterval(this.state.interval);
            var interval = setInterval(this.goToNextSlide, 1000000);
            this.setState({ interval: interval, pause: true });
        }
    };
    Carousel.prototype.run = function (e) {
        e.preventDefault();
        if (this.state.autoplay && this.state.pause) {
            clearInterval(this.state.interval);
            var interval = setInterval(this.goToNextSlide, this.state.delay);
            this.setState({ interval: interval, pause: false });
        }
    };
    Carousel.prototype.renderSlides = function (data) {
        var result = [];
        if (data) {
            data.map(function (slide, i) {
                if (slide.image) {
                    result.push(React.createElement("div", { key: i, className: "slider__slide", id: 'slider__slide' },
                        React.createElement(Link_1.default, __assign({}, slide.url),
                            React.createElement(Media_1.default, { type: 'image', data: slide.image }))));
                }
            });
        }
        return result;
    };
    Carousel.prototype.renderSlider = function (data) {
        var _this = this;
        return (React.createElement("div", { className: "slider", onMouseEnter: function (e) { return _this.pause(e); }, onMouseLeave: function (e) { return _this.run(e); } },
            React.createElement("div", { className: "slider__wrapper", style: {
                    transform: "translateX(" + this.state.translateValue + "px)",
                    transition: 'transform ease-out 0.25s'
                } }, this.renderSlides(data)),
            this.state.showArrows ? (React.createElement(React.Fragment, null,
                React.createElement(LeftArrow_1.default, { goToPrevSlide: this.goToPrevSlide }),
                React.createElement(RightArrow_1.default, { goToNextSlide: this.goToNextSlide }))) : '',
            this.state.showDots && this.state.slides.length > 0 ?
                React.createElement(Dots_1.default, { goTo: this.goTo, len: this.state.slides.length, currentIndex: this.state.currentIndex }) : ''));
    };
    Carousel.prototype.render = function () {
        var _this = this;
        var displayOnTop = this.props.data.displayOnTop;
        return (React.createElement(List_1.default, { data: this.state.slides }, function (_a) {
            var data = _a.data;
            return (React.createElement("div", null,
                displayOnTop ? React.createElement("div", { className: 'carousel__divider' }) : '',
                React.createElement("div", { className: 'carousel' },
                    React.createElement("div", { className: 'carousel__images' }, _this.renderSlider(data))),
                React.createElement("div", { className: 'carousel__titles' },
                    React.createElement("ul", { className: 'carousel__titles__list' }, data && data.map(function (slide, i) { return (React.createElement("li", { key: i, onClick: function () { return _this.goTo(i); }, className: 'carousel__titles__list__item', style: i === _this.state.currentIndex ? {
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