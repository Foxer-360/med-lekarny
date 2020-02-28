"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CodeHint = /** @class */ (function (_super) {
    __extends(CodeHint, _super);
    function CodeHint(props) {
        var _this = _super.call(this, props) || this;
        _this.hideHint = _this.hideHint.bind(_this);
        return _this;
    }
    CodeHint.prototype.hideHint = function () {
        return this.props.hideHint();
    };
    CodeHint.prototype.render = function () {
        return (React.createElement("section", { className: "recipe-illustrations" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-4 ilu-column" },
                    React.createElement("img", { className: 'recipe-ilu list', alt: 'receipt image', src: '/assets/mediconLekarny/images/recept-list.png' }),
                    React.createElement("span", { className: "ilu-title" }, "PR\u016EVODKA")),
                React.createElement("div", { className: "col-4 ilu-column" },
                    React.createElement("img", { className: 'recipe-ilu phone', alt: 'receipt image', src: '/assets/mediconLekarny/images/recept-phone.png' }),
                    React.createElement("span", { className: "ilu-title" }, "SMS")),
                React.createElement("div", { className: "col-4 ilu-column" },
                    React.createElement("img", { className: 'recipe-ilu pc', alt: 'receipt image', src: '/assets/mediconLekarny/images/recept-pc.png' }),
                    React.createElement("span", { className: "ilu-title" }, "E-MAIL"))),
            React.createElement("div", { className: "row ilu-text" },
                React.createElement("p", { className: "text text-center" }, "Zde najdete identifik\u00E1tor Va\u0161eho receptu.")),
            React.createElement("button", { type: "button", className: "btn-hide-hint gradientHeading", onClick: this.hideHint }, "( zav\u0159\u00EDt n\u00E1pov\u011Bdu )")));
    };
    return CodeHint;
}(React.Component));
exports.default = CodeHint;
//# sourceMappingURL=CodeHint.js.map