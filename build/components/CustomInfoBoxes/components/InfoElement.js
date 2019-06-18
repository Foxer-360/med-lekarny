"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("../../../partials/Button");
var getImgUrl_1 = require("../../../helpers/getImgUrl");
function InfoElement(props) {
    var title = props.title, gradientColor = props.gradientColor, image = props.image, button = props.button, titleColor = props.titleColor, link = props.link;
    return (React.createElement("div", { className: 'col-sm-12 col-md-6 col-xl-4' },
        React.createElement("div", { className: 'custom-info-boxes__list__element', style: { backgroundImage: image && "url(" + getImgUrl_1.default(image) + ")" } },
            React.createElement("div", { className: 'fullWidthContainer custom-info-boxes__list__element__content' },
                titleColor && title && React.createElement("h5", { style: { color: "" + titleColor } }, title),
                button && React.createElement(Button_1.default, { url: link, classes: 'btn--fullWidth ' + button }, "vice info")),
            gradientColor && (React.createElement("div", { className: 'custom-info-boxes__list__element--colorGradient', style: { background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, " + gradientColor + " 100%)" } })))));
}
exports.default = InfoElement;
//# sourceMappingURL=InfoElement.js.map