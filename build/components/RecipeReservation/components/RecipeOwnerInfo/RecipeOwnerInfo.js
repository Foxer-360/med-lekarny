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
        _this.setErrors = function (error) {
            // this.setState({
            //   errors: { ...this.state.errors, ...error }
            // });
        };
        _this.validateName = function (name) {
            if (name.length < 5) {
                _this.setErrors({ name: 'Jméno musí být vyplněno' });
            }
            else {
                _this.setErrors({ name: '' });
            }
        };
        _this.validatePhone = function (phone) {
            var reg = /^\d+$/;
            if (reg.test(phone)) {
                _this.setErrors({ phone: '' });
            }
            else {
                _this.setErrors({ phone: 'Vyplňte prosím telefoní číslo (formát: XXX XXX XXX)' });
            }
        };
        _this.validateEmail = function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(email).toLowerCase())) {
                _this.setErrors({ email: '' });
            }
            else {
                _this.setErrors({ email: 'Zkontrolujte si prosím zda jste správně vyplnili e-mail.' });
            }
        };
        _this.handleInputChange = function (update) {
            _this.setState(update, function () { return _this.updateMainComponent(_this.state); });
        };
        return _this;
    }
    RecipeOwnerInfo.prototype.render = function () {
        var _this = this;
        var _a = this.props.owner, contactBySMS = _a.contactBySMS, contactByPhone = _a.contactByPhone, gdpr = _a.gdpr;
        return (React.createElement("div", { className: "row recipe-owner-info" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-6 offset-md-3 form-wrap" },
                        React.createElement("label", { className: "center" },
                            "Jm\u00E9no a P\u0159\u00EDjmen\u00ED",
                            React.createElement("input", { type: "text", name: "name", onChange: function (e) {
                                    var _a;
                                    return _this.handleInputChange((_a = {}, _a[e.target.name] = e.target.value, _a));
                                }, required: true })),
                        React.createElement("label", { className: "center" },
                            "Telefon",
                            React.createElement("input", { type: "tel", name: "phone", onChange: function (e) {
                                    var _a;
                                    return _this.handleInputChange((_a = {}, _a[e.target.name] = e.target.value, _a));
                                }, required: true })),
                        React.createElement("label", { className: "center" },
                            "E-mail",
                            React.createElement("input", { type: "email", name: "email", onChange: function (e) {
                                    var _a;
                                    return _this.handleInputChange((_a = {}, _a[e.target.name] = e.target.value, _a));
                                }, required: true })),
                        React.createElement("div", { className: "contact-choose" },
                            React.createElement("span", null, "Jak chcete, abychom v\u00E1s kontaktovali?"),
                            React.createElement("label", { className: "checkbox-label " + (contactBySMS && 'checked') },
                                React.createElement("input", { name: "contactBySMS", type: "checkbox", checked: contactBySMS, onChange: function (e) { return _this.handleInputChange({ contactBySMS: false, contactByPhone: true }); } }),
                                "P\u0159es sms"),
                            React.createElement("label", { className: "checkbox-label " + (contactByPhone && 'checked') },
                                React.createElement("input", { name: "contactByPhone", type: "checkbox", checked: contactByPhone, onChange: function (e) { return _this.handleInputChange({ contactByPhone: true, contactBySMS: false }); } }),
                                "Telefonicky")),
                        React.createElement("label", { className: "gdpr-info checkbox-label " + (gdpr && 'checked') },
                            React.createElement("input", { name: "dgpr", type: "checkbox", checked: false, onChange: function () { return _this.handleInputChange({ gdpr: !gdpr }); }, required: true }),
                            "Pou\u010Den\u00ED o zpracov\u00E1n\u00ED \u00FAdaj\u016F"),
                        React.createElement("a", { href: "https://www.mediconas.cz/cs/ochrana-osobnich-udaju", className: "link" }, "St\u00E1hnout podm\u00EDnky zpracov\u00E1n\u00ED \u00FAdaj\u016F"))))));
    };
    return RecipeOwnerInfo;
}(React.Component));
exports.default = RecipeOwnerInfo;
//# sourceMappingURL=RecipeOwnerInfo.js.map