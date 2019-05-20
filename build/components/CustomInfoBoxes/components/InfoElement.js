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
var Link_1 = require("@source/partials/Link");
var Button_1 = require("@source/partials/Button");
var getImageUrl_1 = require("@source/helpers/getImageUrl");
function InfoElement(props) {
    var title = props.title, gradientColor = props.gradientColor, image = props.image, button = props.button, titleColor = props.titleColor, link = props.link;
    return (React.createElement(Link_1.default, __assign({}, link, { className: 'custom-info-boxes__list__element col-sm-12 col-md-6 col-xl-4', style: { backgroundImage: image && "url(" + getImageUrl_1.default(image) + ")" } }),
        React.createElement("div", { className: 'fullWidthContainer custom-info-boxes__list__element__content' },
            titleColor && title && React.createElement("h5", { style: { color: "" + titleColor } }, title),
            button && React.createElement(Button_1.default, { classes: 'btn--fullWidth ' + button }, "vice info")),
        gradientColor && (React.createElement("div", { className: 'custom-info-boxes__list__element--colorGradient', style: { background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, " + gradientColor + " 100%)" } }))));
}
exports.default = InfoElement;
//# sourceMappingURL=InfoElement.js.map