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
var getImgUrl_1 = require("../../helpers/getImgUrl");
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.render = function () {
        var _a = this.props.data, title = _a.title, text = _a.text, image = _a.image, displayBlackOverlay = _a.displayBlackOverlay, displayWhiteOverlay = _a.displayWhiteOverlay, titleColor = _a.titleColor, textColor = _a.textColor, opacity = _a.opacity;
        return (React.createElement("div", { className: "fullWidthContainer" },
            React.createElement("section", { className: 'hero', style: { backgroundImage: image && "url(" + getImgUrl_1.default(image) + ")" } },
                displayBlackOverlay &&
                    React.createElement("div", { style: opacity ? { opacity: opacity } : {}, className: 'hero__blackOverlay' }),
                displayWhiteOverlay &&
                    React.createElement("div", { style: opacity ? { opacity: opacity } : {}, className: 'hero__whiteOverlay' }),
                React.createElement("div", { className: 'hero__holder' },
                    React.createElement("div", { className: 'container' },
                        title &&
                            React.createElement("h1", { className: "hero__title hero__title--" + titleColor }, title),
                        text &&
                            React.createElement("div", { className: "hero__text hero__text--" + textColor + " " },
                                React.createElement("p", null, text)))))));
    };
    return Hero;
}(React.Component));
exports.default = Hero;
//# sourceMappingURL=Hero.js.map