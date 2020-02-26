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
var RecipeOwnerInfo = /** @class */ (function (_super) {
    __extends(RecipeOwnerInfo, _super);
    function RecipeOwnerInfo(props) {
        var _this = _super.call(this, props) || this;
        // validateEmail = email => {
        //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //   if (!re.test(String(email).toLowerCase()))
        //     setTimeout(() => this.setErrors({ email: "Email is invalid" }), 800);
        //   else this.setErrors({ email: "" });
        // };
        _this.setErrors = function (error) {
            _this.setState({
                errors: __assign(__assign({}, _this.state.errors), error)
            });
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }
    RecipeOwnerInfo.prototype.validateName = function (name) {
        if (name.length < 5) {
            this.setErrors({ name: 'Jméno musí být vyplněno' });
        }
        else {
            this.setErrors({ name: '' });
        }
    };
    RecipeOwnerInfo.prototype.handleInputChange = function (e) {
        if (e.target.name === 'name') {
            this.validateName(e.target.value);
            this.setState({ name: e.target.value });
        }
    };
    RecipeOwnerInfo.prototype.render = function () {
        return (React.createElement("div", { className: "row recipe-owner-info" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-6 offset-md-3 form-wrap" },
                        React.createElement("label", { className: "center" },
                            "Jm\u00E9no a P\u0159\u00EDjmen\u00ED",
                            React.createElement("input", { type: "text", name: "name", onChange: this.handleInputChange, required: true })),
                        React.createElement("label", { className: "center" },
                            "Telefon",
                            React.createElement("input", { type: "tel", name: "phone", required: true })),
                        React.createElement("label", { className: "center" },
                            "E-mail",
                            React.createElement("input", { type: "email", name: "email", required: true })),
                        React.createElement("div", { className: "contact-choose" },
                            React.createElement("span", null, "Jak chcete, abychom v\u00E1s kontaktovali?"),
                            React.createElement("label", { className: "checkbox-label" },
                                React.createElement("input", { name: "contactWayMail", type: "checkbox", checked: false, onChange: function () { return console.log('ahoj'); } }),
                                "E-mailem"),
                            React.createElement("label", { className: "checkbox-label checked" },
                                React.createElement("input", { name: "contactWayPhone", type: "checkbox", checked: true, onChange: function () { return console.log('ahoj'); } }),
                                "P\u0159es sms")),
                        React.createElement("label", { className: "gdpr-info checkbox-label" },
                            React.createElement("input", { name: "dgpr", type: "checkbox", checked: false, onChange: function () { return console.log('ne'); }, required: true }),
                            "Pou\u010Den\u00ED o zpracov\u00E1n\u00ED \u00FAdaj\u016F"),
                        React.createElement("a", { href: "https://www.mediconas.cz/cs/ochrana-osobnich-udaju", className: "link" }, "St\u00E1hnout podm\u00EDnky zpracov\u00E1n\u00ED \u00FAdaj\u016F"),
                        React.createElement("button", { type: "button", className: "recipe-btn submit-btn" }, "Odeslat rezervaci"))))));
    };
    return RecipeOwnerInfo;
}(React.Component));
exports.default = RecipeOwnerInfo;
//# sourceMappingURL=RecipeOwnerInfo.js.map