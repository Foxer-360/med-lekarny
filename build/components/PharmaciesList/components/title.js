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
var Button_1 = require("../../../partials/Button");
var Title = function (props) {
    return (React.createElement("div", { className: 'pcTitle' },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-6 align-content-center" },
                React.createElement("img", { src: "/assets/mediconLekarny/images/logo.svg", alt: "Medicon Logo" }),
                React.createElement("div", { className: 'pcTitle__title' },
                    React.createElement("h3", null, "L\u00E9k\u00E1rna"),
                    React.createElement("div", { className: 'pcTitle__title__subtitle' },
                        React.createElement("span", null, props.name),
                        React.createElement("span", { className: 'pcTitle__title__subtitle__circles' },
                            React.createElement("div", null),
                            React.createElement("div", null),
                            React.createElement("div", null),
                            React.createElement("div", null),
                            React.createElement("div", null),
                            React.createElement("div", null))))),
            React.createElement("div", { className: "col-md-6" },
                React.createElement(Button_1.default, __assign({ classes: 'btn--orangeBorder res_recipe' }, props.buttonUrl), ('' + props.buttonText).replace('-', '-\u2060'))))));
};
exports.default = Title;
//# sourceMappingURL=title.js.map