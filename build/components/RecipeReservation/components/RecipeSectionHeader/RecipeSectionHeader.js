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
var TextBlock_1 = require("../../../TextBlock");
var RecipeSectionHeader = /** @class */ (function (_super) {
    __extends(RecipeSectionHeader, _super);
    function RecipeSectionHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.validationTable = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
            'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', '8', '9', '2', '3', '4', '5', '6', '7'
        ];
        _this.data = {
            title: 'Rezervace e-receptů',
            text: 'Rezervujte si léky z Vašeho receptu předem a ušetřete si dvojí cestu do lékárny! Stačí vyplnit kód Vašeho e-receptu nebo název Vašeho léku a my Vám dáme vědět, kdy budou Vaše léky připraveny k vyzvednutí. Můžete si zarezervovat i další volně prodejné přípravky.',
        };
        _this.translations = {
            code_invalid: 'Kód je neplatný.'
        };
        _this.setErrors = function (error) {
            _this.setState({
                errors: __assign(__assign({}, _this.state.errors), error)
            });
        };
        _this.validateCode = function (code) {
            var ereceiptCode = code.replace(/\W/gi, '').toUpperCase();
            if (ereceiptCode.length !== 12) {
                setTimeout(function () {
                    _this.setErrors({ code: _this.translations.code_invalid });
                }, 1600);
            }
            var total = 0;
            for (var i = 0; i < ereceiptCode.length - 1; i++) {
                total += _this.validationTable.indexOf(ereceiptCode[i]);
            }
            var validation = _this.validationTable.indexOf(ereceiptCode[ereceiptCode.length - 1]) === total % 32;
            console.log('validation', validation);
            if (!validation) {
                setTimeout(function () { _this.setErrors({ code: _this.translations.code_invalid }); }, 800);
            }
            else {
                _this.setErrors({ code: '' });
            }
            console.log('validation', validation, _this.state.errors);
            return validation;
            // test code: PCIFF8GNBLOI
            // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            // if (!re.test(String(code).toLowerCase())) {
            //   setTimeout(() => this.setErrors({ code: 'code is invalid' }), 800);
            // } else {
            //   this.setErrors({ code: '' });
            // }
        };
        _this.state = {
            recipeCodeInput: '',
            errors: ''
        };
        _this.recipeCodeInputChange = _this.recipeCodeInputChange.bind(_this);
        return _this;
    }
    RecipeSectionHeader.prototype.recipeCodeInputChange = function (e) {
        var value = e.target && e.target.value;
        if (value !== null) {
            this.setState({ recipeCodeInput: value });
        }
        var validCode = this.validateCode(value);
        if (validCode) {
            console.log('valid code updatni přes props state v main komponentě');
            this.recipeCodesArrayUpdate(value);
        }
        console.log('valid? value input change', validCode);
    };
    RecipeSectionHeader.prototype.recipeCodesArrayUpdate = function (code) {
        var codesArray = this.props.recipesArray;
        this.setState({ recipeCodeInput: '' });
        codesArray.push(code);
        this.props.updateRecipesArray(code);
    };
    RecipeSectionHeader.prototype.render = function () {
        var recipesArray = this.props.recipesArray;
        var _a = this.state, recipeCodeInput = _a.recipeCodeInput, errors = _a.errors;
        var errorCodeBoolean = errors.code && errors.code.length > 0;
        return (React.createElement("header", { className: "recipe-header" },
            React.createElement("div", { className: "container" },
                React.createElement(TextBlock_1.default, { data: this.data }),
                React.createElement("section", { className: "recipe-illustrations" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-4 ilu-column" },
                            React.createElement("img", { className: 'recipe-ilu', alt: 'receipt image', src: '/assets/mediconLekarny/images/recept-list.png' }),
                            React.createElement("span", { className: "ilu-title" }, "RECEPT")),
                        React.createElement("div", { className: "col-4 ilu-column" },
                            React.createElement("img", { className: 'recipe-ilu', alt: 'receipt image', src: '/assets/mediconLekarny/images/recept-phone.png' }),
                            React.createElement("span", { className: "ilu-title" }, "SMS")),
                        React.createElement("div", { className: "col-4 ilu-column" },
                            React.createElement("img", { className: 'recipe-ilu', alt: 'receipt image', src: '/assets/mediconLekarny/images/recept-pc.png' }),
                            React.createElement("span", { className: "ilu-title" }, "E-MAIL"))),
                    React.createElement("div", { className: "row ilu-text" },
                        React.createElement("p", { className: "text text-center" }, "Zde najdete identifik\u00E1tor Va\u0161eho receptu."),
                        React.createElement("p", { className: "text text-center text-cursive" }, "Jde o 12-m\u00EDstn\u00FD alfanumerick\u00FD k\u00F3d, \u010D\u00E1rov\u00FD k\u00F3d, QR k\u00F3d nebo odkaz ke sta\u017Een\u00ED k\u00F3du."))),
                React.createElement("section", { className: "recipe-input-wrapper" },
                    React.createElement("h4", { className: "headline" }, "K\u00F3d e-receptu"),
                    React.createElement("div", { className: "form-wrapper" },
                        React.createElement("input", { type: "text", className: "recipe-input " + (errorCodeBoolean ? 'error' : ''), placeholder: "za\u010Dn\u011Bte ps\u00E1t", value: recipeCodeInput, onChange: this.recipeCodeInputChange }),
                        React.createElement("span", { className: "center-word" }, "nebo"),
                        React.createElement("button", { className: "recipe-btn" },
                            "Nahr\u00E1t foto",
                            React.createElement("span", { className: "plus-icon" }))),
                    React.createElement("section", null,
                        "REZERVACE RECEPT\u016E S K\u00D3DEM:",
                        console.log('recipes', recipesArray),
                        Array.isArray(recipesArray)
                            && recipesArray.length > 0
                            && recipesArray.map(function (recipe) {
                                return React.createElement("span", { key: "id" + recipe },
                                    recipe,
                                    " more");
                            }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        "kod v inputu -> state v header komponent\u011B ",
                        recipeCodeInput),
                    React.createElement("form", { action: "", className: "reservation-note" },
                        React.createElement("label", { className: "textform-label" },
                            React.createElement("span", { className: "textform-label_text" }, "Pozn\u00E1mka"),
                            React.createElement("textarea", { name: "note", className: "recipe-input" })))))));
    };
    return RecipeSectionHeader;
}(React.Component));
exports.default = RecipeSectionHeader;
//# sourceMappingURL=RecipeSectionHeader.js.map