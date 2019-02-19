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
import getImageUrl from '../../helpers/getImageUrl';
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.render = function () {
        var _a = this.props.data, title = _a.title, text = _a.text, image = _a.image;
        return (React.createElement("div", { className: "fullWidthContainer" },
            React.createElement("section", { className: 'hero', style: { backgroundImage: image && "url(" + getImageUrl(image) + ")" } },
                React.createElement("div", { className: 'container' },
                    React.createElement("div", { className: 'hero__holder' },
                        title && React.createElement("h1", null, title),
                        text && React.createElement("div", { className: 'hero__text' }, text))))));
    };
    return Hero;
}(React.Component));
export default Hero;
//# sourceMappingURL=Hero.js.map