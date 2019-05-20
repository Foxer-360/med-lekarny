"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var Media_1 = require("@source/partials/Media");
var PaymentMethods = function (props) {
    var _a = props.data, title = _a.title, methods = _a.methods;
    return (React.createElement(List_1.default, { data: methods }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'payment-methods' },
            React.createElement("div", { className: 'container' },
                title && React.createElement("h3", null, title),
                React.createElement("div", { className: 'payment-methods__list row' }, data && data.map(function (method, i) { return (React.createElement("div", { key: i, className: 'payment-methods__list__item col-xs' }, method.image && React.createElement(Media_1.default, { key: i, type: 'image', data: method.image }))); })))));
    }));
};
exports.default = PaymentMethods;
//# sourceMappingURL=PaymentMethods.js.map