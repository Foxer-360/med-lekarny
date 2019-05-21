"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("../../../partials/Button");
var getImgUrl_1 = require("../../../helpers/getImgUrl");
function InfoElement(props) {
    var title = props.title, image = props.image, url = props.url;
    return (React.createElement("a", { className: 'info-boxes__list__element col-sm-12 col-md-6 col-xl-4', style: { backgroundImage: image && "url(" + getImgUrl_1.default(image) + ")" } },
        React.createElement("div", { className: 'fullWidthContainer info-boxes__list__element__content' },
            title && React.createElement("h5", null, title),
            React.createElement(Button_1.default, { url: url, classes: 'btn--fullWidth btn--greenBkg' }, "vice info")),
        React.createElement("div", { className: 'info-boxes__list__element--colorGradient', style: { background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, white 100%)", } })));
}
exports.default = InfoElement;
//# sourceMappingURL=InfoElement.js.map