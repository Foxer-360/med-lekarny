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
var RecipeOwnerInfo = /** @class */ (function (_super) {
    __extends(RecipeOwnerInfo, _super);
    function RecipeOwnerInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updateMainComponent = function (data) {
            _this.props.updateMainComponent(data);
        };
        _this.handleInputChange = function (update) {
            _this.setState(update, function () { return _this.updateMainComponent(_this.state); });
        };
        _this.validate = function (key, value) {
            _this.props.validateOwner(key, value);
        };
        return _this;
    }
    RecipeOwnerInfo.prototype.render = function () {
        var _this = this;
        var _a = this.props, gdpr = _a.owner.gdpr, errors = _a.errors;
        return (React.createElement("div", { className: "row recipe-owner-info" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-6 offset-md-3 form-wrap" },
                        React.createElement("label", { className: "center" },
                            "Jm\u00E9no a P\u0159\u00EDjmen\u00ED",
                            React.createElement("input", { type: "text", name: "name", onChange: function (e) {
                                    var _a;
                                    _this.handleInputChange((_a = {}, _a[e.target.name] = e.target.value, _a));
                                    _this.validate([e.target.name], e.target.value);
                                }, className: "" + (errors.name && errors.name.length > 0 ? 'error' : ''), required: true }),
                            React.createElement("span", { className: "error-msg" }, errors.name)),
                        React.createElement("label", { className: "center" },
                            "Telefon",
                            React.createElement("input", { type: "tel", name: "phone", onChange: function (e) {
                                    var _a;
                                    _this.handleInputChange((_a = {}, _a[e.target.name] = e.target.value, _a));
                                    _this.validate([e.target.name], e.target.value);
                                }, className: "" + (errors.phone && errors.phone.length > 0 ? 'error' : ''), required: true }),
                            React.createElement("span", { className: "error-msg" }, errors.phone)),
                        React.createElement("label", { className: "center" },
                            "E-mail",
                            React.createElement("input", { type: "email", name: "email", onChange: function (e) {
                                    var _a;
                                    _this.handleInputChange((_a = {}, _a[e.target.name] = e.target.value, _a));
                                    _this.validate([e.target.name], e.target.value);
                                }, className: "" + (errors.email && errors.email.length > 0 ? 'error' : ''), required: true }),
                            React.createElement("span", { className: "error-msg" }, errors.email)),
                        React.createElement("label", { className: "gdpr-info checkbox-label " + (gdpr && 'checked') },
                            React.createElement("input", { name: "dgpr", type: "checkbox", checked: false, onChange: function () { return _this.handleInputChange({ gdpr: !gdpr }); }, required: true }),
                            "Pou\u010Den\u00ED o zpracov\u00E1n\u00ED \u00FAdaj\u016F"),
                        React.createElement("a", { href: "https://www.mediconas.cz/cs/ochrana-osobnich-udaju", className: "link" }, "St\u00E1hnout podm\u00EDnky zpracov\u00E1n\u00ED \u00FAdaj\u016F"))))));
    };
    return RecipeOwnerInfo;
}(React.Component));
exports.default = RecipeOwnerInfo;
//# sourceMappingURL=RecipeOwnerInfo.js.map