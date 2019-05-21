"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var Link_1 = require("../../partials/Link");
var Media_1 = require("../../partials/Media");
var getImgUrl_1 = require("../../helpers/getImgUrl");
var InfoRectangles = function (props) {
    var infoRectangles = props.data.infoRectangles;
    return (React.createElement(List_1.default, { data: infoRectangles }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: 'info-rectangles' },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: 'info-rectangles__divider' }),
                React.createElement("div", { className: 'info-rectangles__list row' }, data && data.map(function (rectangle, i) {
                    return (React.createElement("div", { key: i, className: 'info-rectangles__list__item col-12 col-md-6', style: { backgroundImage: rectangle.image && "url(" + getImgUrl_1.default(rectangle.image) + ")" } },
                        React.createElement(Link_1.default, { className: 'info-rectangles__list__item__content' },
                            rectangle.icon && React.createElement(Media_1.default, { type: 'image', data: rectangle.icon }),
                            rectangle.title &&
                                React.createElement("p", { style: rectangle.titleColor && { color: "" + rectangle.titleColor } || {} }, rectangle.title)),
                        rectangle.gradientColor && (React.createElement("div", { className: 'info-rectangles__list__item--colorGradient', style: {
                                background: "linear-gradient(to left, rgba(125, 185, 232, 0) 0%, \n                          " + rectangle.gradientColor + " 100%)",
                                opacity: rectangle.opacity && rectangle.opacity
                            } }))));
                })))));
    }));
};
exports.default = InfoRectangles;
//# sourceMappingURL=InfoRectangles.js.map