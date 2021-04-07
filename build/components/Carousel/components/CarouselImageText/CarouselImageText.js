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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("../../../../partials/Button");
var Media_1 = require("../../../../partials/Media");
var utils_1 = require("./utils");
var CarouselImageText = /** @class */ (function (_super) {
    __extends(CarouselImageText, _super);
    function CarouselImageText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderSecondaryImage = function () {
            var _a = _this.props, secondaryImage = _a.secondaryImage, centerText = _a.centerText;
            if (!secondaryImage) {
                return null;
            }
            return (React.createElement("div", { className: "carouselImageText__contentHolder__image " + (centerText ? 'carouselImageText__contentHolder__image--center' : '') },
                React.createElement(Media_1.default, { width: '100', height: '100', type: "image", data: secondaryImage })));
        };
        _this.renderCallToActionBtn = function () {
            var _a = _this.props, centerText = _a.centerText, isTextWhite = _a.isTextWhite, url = _a.url, buttonTitle = _a.buttonTitle;
            if (!utils_1.shouldButtonRender(url, buttonTitle)) {
                return null;
            }
            return (React.createElement("div", { className: "carouselImageText__contentHolder__btnHolder " + (centerText ? 'carouselImageText__contentHolder__btnHolder--center' : '') },
                React.createElement(Button_1.default, { classes: " btn--orangeBkg " + (!isTextWhite ? 'btn--bordered' : '') + " " + (centerText ? 'btn--center' : ''), url: url }, buttonTitle)));
        };
        return _this;
    }
    CarouselImageText.prototype.render = function () {
        var _a = this.props, text = _a.text, image = _a.image, title = _a.title, imagePosition = _a.imagePosition, subtitle = _a.subtitle, centerText = _a.centerText, imageBackgroundColor = _a.imageBackgroundColor, textBackgroundColor = _a.textBackgroundColor, isTextWhite = _a.isTextWhite, textImage = _a.textImage;
        return (React.createElement("section", { className: "carouselImageText " + (imagePosition && imagePosition === 'right' ? 'carouselImageText--right' : 'carouselImageText--left') + " " },
            React.createElement("div", { className: 'carouselImageText__imgHolder', style: utils_1.getBackgroundImageStyle(image, imageBackgroundColor) }),
            React.createElement("div", { className: 'carouselImageText__contentHolder', style: utils_1.getBackgroundImageStyle(textImage, textBackgroundColor) },
                this.renderSecondaryImage(),
                React.createElement("div", { className: "carouselImageText__contentHolder__text " + (centerText ? 'carouselImageText__contentHolder__text--center' : '') },
                    title && React.createElement("h2", { style: utils_1.getTextColor(isTextWhite) }, title),
                    subtitle && React.createElement("h4", { style: utils_1.getTextColor(isTextWhite) }, subtitle),
                    text && React.createElement("p", { style: utils_1.getTextColor(isTextWhite) }, text),
                    this.renderCallToActionBtn()))));
    };
    return CarouselImageText;
}(React.Component));
exports.default = CarouselImageText;
//# sourceMappingURL=CarouselImageText.js.map