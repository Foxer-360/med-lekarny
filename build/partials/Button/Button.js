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
var Link_1 = require("../Link");
var Button = function (props) {
    // Button with link
    if (props.url) {
        return (React.createElement(Link_1.default, __assign({ className: "btn " + props.classes }, props.url),
            props.children,
            !props.noArrow && React.createElement("span", { className: "arrow" })));
    }
    else {
        return (
        // button with no link
        React.createElement("button", { className: "btn " + props.classes },
            props.children,
            !props.noArrow && React.createElement("span", { className: "arrow" })));
    }
};
exports.default = Button;
//# sourceMappingURL=Button.js.map