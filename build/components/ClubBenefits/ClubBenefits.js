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
var ReactMarkdown = require("react-markdown");
var List_1 = require("../List");
var Link_1 = require("../../partials/Link");
var Button_1 = require("../../partials/Button");
var ClubBenefits = function (props) {
    var _a = props.data, buttonTitle = _a.buttonTitle, buttonUrl = _a.buttonUrl, conditionsUrl = _a.conditionsUrl, benefits = _a.benefits;
    return (React.createElement(List_1.default, { data: benefits }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'club-benefits' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'club-benefits__list row' }, data && data.map(function (benefit, i) {
                    return (React.createElement("div", { key: i, className: 'club-benefits__list__item col-12 col-md-6 col-lg-3' }, benefit.title && React.createElement(ReactMarkdown, { source: benefit.title })));
                })),
                buttonTitle &&
                    React.createElement("div", { className: 'club-benefits__btn-holder' },
                        React.createElement(Button_1.default, { url: buttonUrl, classes: 'btn--greenBkg hCenterBlock' }, buttonTitle)),
                conditionsUrl &&
                    React.createElement(Link_1.default, __assign({}, conditionsUrl, { className: 'club-benefits__conditions' }), "V\u0161eobecn\u00E9 obchodn\u00ED podm\u00EDnky"))));
    }));
};
exports.default = ClubBenefits;
//# sourceMappingURL=ClubBenefits.js.map