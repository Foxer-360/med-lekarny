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
var Link_1 = require("../../partials/Link");
var getImgUrl_1 = require("../../helpers/getImgUrl");
var MiniBoxes = function (props) {
    var _a = props.data, title = _a.title, dividerOnTop = _a.dividerOnTop, miniBoxes = _a.miniBoxes;
    return (React.createElement(List_1.default, { data: miniBoxes }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'mini-boxes' },
            React.createElement("div", { className: "container" },
                dividerOnTop ? React.createElement("div", { className: 'mini-boxes__divider' }) : '',
                title && React.createElement("h3", null, title),
                React.createElement("div", { className: 'mini-boxes__list row' }, data && data.map(function (box, i) {
                    return (React.createElement("div", { key: i, className: 'col-12 col-sm-6 col-md-4 col-xl-3' },
                        React.createElement("div", { className: 'mini-boxes__list__item', style: { backgroundImage: box.image && "url(" + getImgUrl_1.default(box.image) + ")" } },
                            box.title &&
                                React.createElement("p", { style: box.titleColor ?
                                        { color: "" + box.titleColor } :
                                        {} }, box.title),
                            React.createElement(Link_1.default, __assign({}, box.url, { style: {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    zIndex: 1000
                                } })),
                            React.createElement("div", { className: 'mini-boxes__list__item--colorGradient', style: {
                                    background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, \n                          " + box.gradientColor + " 100%)"
                                } }))));
                })))));
    }));
};
exports.default = MiniBoxes;
//# sourceMappingURL=MiniBoxes.js.map