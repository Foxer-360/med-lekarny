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
var Partners = function (props) {
    var _a = props.data, title = _a.title, partners = _a.partners;
    return (React.createElement(List_1.default, { data: partners }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'partners' },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: 'partners__divider' }),
                title && React.createElement("h3", null, title),
                React.createElement("div", { className: 'partners__list row' }, data && data.map(function (partner, i) {
                    return (React.createElement(Link_1.default, __assign({ key: i, className: 'col-xs' }, partner.url), partner.image &&
                        React.createElement(Media_1.default, { type: 'image', data: partner.image })));
                })))));
    }));
};
exports.default = Partners;
//# sourceMappingURL=Partners.js.map