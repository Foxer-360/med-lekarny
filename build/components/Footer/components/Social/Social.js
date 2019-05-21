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
var SvgIcon_1 = require("../../../../partials/SvgIcon");
var Link_1 = require("../../../../partials/Link");
var Social = function (props) {
    var icons = props.icons;
    return (React.createElement("div", { className: 'social' }, icons && icons.map(function (icon, i) { return (React.createElement(Link_1.default, __assign({ key: i }, icon.url),
        React.createElement(SvgIcon_1.default, { type: 'white', name: icon.title && icon.title }))); })));
};
exports.default = Social;
//# sourceMappingURL=Social.js.map