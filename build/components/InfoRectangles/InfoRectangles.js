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
var List_1 = require("../List");
var Link_1 = require("@source/partials/Link");
var Media_1 = require("@source/partials/Media");
var getImageUrl_1 = require("@source/helpers/getImageUrl");
var InfoRectangles = function (props) {
    var infoRectangles = props.data.infoRectangles;
    return (React.createElement(List_1.default, { data: infoRectangles }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: 'info-rectangles' },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: 'info-rectangles__divider' }),
                React.createElement("div", { className: 'info-rectangles__list grid' }, data && data.map(function (rectangle, i) {
                    return (React.createElement(Link_1.default, __assign({ key: i, className: 'info-rectangles__list__item', style: { backgroundImage: rectangle.image && "url(" + getImageUrl_1.default(rectangle.image) + ")" } }, rectangle.url),
                        React.createElement("div", { className: 'info-rectangles__list__item__content' },
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