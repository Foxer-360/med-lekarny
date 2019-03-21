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
import * as React from 'react';
import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import Dots from './components/Dots';
import Slide from './components/Slide';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
    function Carousel(props) {
        var _this = _super.call(this, props) || this;
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
            _this.setState(function (prevState) { return ({
                currentIndex: prevState.currentIndex + 1,
                translateValue: prevState.translateValue + -(_this.slideWidth()),
                interval: setInterval(_this.goToNextSlide, _this.state.delay)
            }); });
        };
        _this.goToPrevSlide = function () {
            clearInterval(_this.state.interval);
            if (_this.state.currentIndex === 0) {
                return _this.setState({
                    currentIndex: _this.state.slides.length,
                    translateValue: _this.state.slides.length * -(_this.slideWidth()),
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
                return 0; // fix for backoffice
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
            slides: _this.galleryItems(),
        };
        return _this;
    }
    Carousel.prototype.componentDidMount = function () {
        this.setState({ slides: this.state.slides });
        if (this.state.autoplay && !this.state.pause) {
            var interval = setInterval(this.goToNextSlide, this.state.delay);
            this.setState({ interval: interval });
        }
    };
    Carousel.prototype.pause = function (e) {
        e.preventDefault();
        if (this.state.autoplay && !this.state.pause) {
            var interval = setInterval(this.goToNextSlide, 1000000);
            this.setState({ interval: interval, pause: true });
        }
    };
    Carousel.prototype.run = function (e) {
        e.preventDefault();
        if (this.state.autoplay && this.state.pause) {
            var interval = setInterval(this.goToNextSlide, this.state.delay);
            this.setState({ interval: interval, pause: false });
        }
    };
    Carousel.prototype.galleryItems = function () {
        var slides = this.props.data.slides;
        var images = [];
        if (slides) {
            slides.map(function (slide, i) {
                if (slide.image) {
                    images.push(React.createElement(Link, { url: slide.url && slide.url.url },
                        React.createElement(Media, { key: i, type: 'image', data: slide.image })));
                }
            });
        }
        return images;
    };
    Carousel.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, slides = _a.slides, displayOnTop = _a.displayOnTop;
        var Slider = (React.createElement("div", { className: "slider", onMouseEnter: function (e) { return _this.pause(e); }, onMouseLeave: function (e) { return _this.run(e); } },
            React.createElement("div", { className: "slider__wrapper", style: {
                    transform: "translateX(" + this.state.translateValue + "px)",
                    transition: 'transform ease-out 0.25s'
                } }, this.state.slides.map(function (slide, i) { return (React.createElement(Slide, { key: i, slide: slide })); })),
            this.state.showArrows ? (React.createElement(React.Fragment, null,
                React.createElement(LeftArrow, { goToPrevSlide: this.goToPrevSlide }),
                React.createElement(RightArrow, { goToNextSlide: this.goToNextSlide }))) : '',
            this.state.showDots ?
                React.createElement(Dots, { goTo: this.goTo, len: this.state.slides.length, currentIndex: this.state.currentIndex }) : ''));
        return (React.createElement(List, { data: slides }, function (_a) {
            var data = _a.data;
            return (React.createElement("div", { className: 'carousel' },
                displayOnTop ? React.createElement("div", { className: 'carousel__divider' }) : '',
                React.createElement("div", { className: 'carousel__images', style: displayOnTop ? {} : { gridRow: 'auto' } }, Slider),
                React.createElement("div", { className: 'carousel__titles', style: displayOnTop ? {} : { gridRow: 'auto' } },
                    React.createElement("ul", { className: 'carousel__titles__list' }, data && data.map(function (slide, i) { return (React.createElement("li", { key: i, onClick: function () { return _this.goTo(i); }, className: 'carousel__titles__list__item', style: i === _this.state.currentIndex ? {
                            color: '#3eac49',
                            fontWeight: 700,
                            backgroundColor: 'white',
                            boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
                            borderBottom: 'none !important'
                        } : {} },
                        React.createElement("span", null, slide.title && slide.title))); })))));
        }));
    };
    return Carousel;
}(React.Component));
export default Carousel;
//# sourceMappingURL=Carousel.js.map