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
var CodeHint_1 = require("./components/CodeHint");
var RecipeSectionHeader = /** @class */ (function (_super) {
    __extends(RecipeSectionHeader, _super);
    function RecipeSectionHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.timeout = null;
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
                errors: __assign({}, _this.state.errors, error)
            });
        };
        _this.recipeCodeInputChange = function (e) {
            var recipesArray = _this.props.recipesArray;
            var value = String(e.target && e.target.value).replace(/\s/g, '');
            // maximum length of e-receipe code is 12
            if (value.length > 12) {
                return;
            }
            if (value !== null) {
                _this.setState({ recipeCodeInput: value.replace(/(\w{1,4})?(\w{1,4})?(\w{1,4})?/, '$1 $2 $3') });
            }
            var isValid = _this.validateCode(value);
            if (isValid && !recipesArray.includes(value)) {
                _this.props.updateRecipesArray(recipesArray.concat([value]));
            }
            if (isValid) {
                _this.setState({ recipeCodeInput: '' });
            }
        };
        _this.recipeCodesArrayUpdate = function (code) {
            var codesArray = _this.props.recipesArray;
            _this.setState({ recipeCodeInput: '' });
            codesArray.push(code);
        };
        _this.validateCode = function (code) {
            var ereceiptCode = code.replace(/\W/gi, '').toUpperCase();
            if (ereceiptCode.length !== 12) {
                _this.setErrors({ code: _this.translations.code_invalid });
                return false;
            }
            var total = 0;
            // calculate sum based on base32 table
            for (var i = 0; i < ereceiptCode.length - 1; i++) {
                total += _this.validationTable.indexOf(ereceiptCode[i]);
            }
            // check if control number makes sense
            var isValid = _this.validationTable.indexOf(ereceiptCode[ereceiptCode.length - 1]) === total % 32;
            if (!isValid) {
                clearTimeout(_this.timeout);
                _this.timeout = setTimeout(function () { _this.setErrors({ code: _this.translations.code_invalid }); }, 400);
            }
            else {
                _this.setErrors({ code: '' });
            }
            return isValid;
            // test code: PCIFF8GNBLOI
            // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            // if (!re.test(String(code).toLowerCase())) {
            //   setTimeout(() => this.setErrors({ code: 'code is invalid' }), 800);
            // } else {
            //   this.setErrors({ code: '' });
            // }
        };
        _this.showHint = function (e) {
            e.preventDefault();
            _this.setState({ hintVisible: true });
        };
        _this.hideHint = function () {
            _this.setState({ hintVisible: false });
        };
        _this.state = {
            recipeCodeInput: '',
            errors: '',
            hintVisible: false,
        };
        return _this;
    }
    RecipeSectionHeader.prototype.render = function () {
        var _a = this.props, recipesArray = _a.recipesArray, updateNote = _a.updateNote, onLoadFileHandler = _a.onLoadFileHandler;
        var _b = this.state, recipeCodeInput = _b.recipeCodeInput, errors = _b.errors;
        var errorCodeBoolean = errors.code && errors.code.length > 0;
        return (React.createElement("header", { className: "recipe-header" },
            React.createElement("div", { className: "container" },
                React.createElement("h1", { className: "gradientHeading" }, this.data.title),
                React.createElement("section", { className: "row intro" },
                    React.createElement("div", { className: "col-md-6 hide-smaller-md" },
                        React.createElement("p", { className: "text text-left" }, this.data.text)),
                    React.createElement("div", { className: "col-md-6 steps" },
                        React.createElement("div", { className: "step" },
                            React.createElement("img", { src: '/assets/mediconLekarny/images/numbers/1.svg', className: "step-image", alt: "1" }),
                            React.createElement("p", { className: "step-text" }, "Vypl\u0148te k\u00F3d receptu")),
                        React.createElement("div", { className: "step" },
                            React.createElement("img", { src: '/assets/mediconLekarny/images/numbers/2.svg', className: "step-image", alt: "2" }),
                            React.createElement("p", { className: "step-text" }, "Po\u010Dkejte na\u00A0potvrzen\u00ED rezervace")),
                        React.createElement("div", { className: "step" },
                            React.createElement("img", { src: '/assets/mediconLekarny/images/numbers/3.svg', className: "step-image", alt: "3" }),
                            React.createElement("p", { className: "step-text" }, "Vyzvedn\u011Bte\u00A0si sv\u00E9 l\u00E9ky ve\u00A0Va\u0161\u00ED l\u00E9k\u00E1rn\u011B Pharmacentrum")))),
                React.createElement("section", { className: "recipe-input-wrapper" },
                    React.createElement("h4", { className: "headline" }, "K\u00F3d e-receptu"),
                    React.createElement("div", { className: "form-wrapper" },
                        React.createElement("input", { type: "text", className: "recipe-input " + (errorCodeBoolean ? 'error' : ''), placeholder: "za\u010Dn\u011Bte ps\u00E1t", value: recipeCodeInput, onChange: this.recipeCodeInputChange }),
                        React.createElement("span", { className: "center-word" }, "nebo"),
                        React.createElement("button", { className: "recipe-btn" },
                            "Vyfotit",
                            React.createElement("input", { type: "file", name: "file", className: "file-input", onChange: onLoadFileHandler }),
                            React.createElement("span", { className: "plus-icon" }))),
                    React.createElement("div", null, this.props.recipesArray.map(function (recipeCode) { return (React.createElement("span", { style: { padding: 5 } }, recipeCode)); })),
                    React.createElement("section", { className: "hint-wrapper" },
                        React.createElement("p", { className: "text text-center text-cursive" }, "Jde o 12-m\u00EDstn\u00FD alfanumerick\u00FD k\u00F3d, \u010D\u00E1rov\u00FD k\u00F3d, QR k\u00F3d nebo odkaz ke sta\u017Een\u00ED k\u00F3du."),
                        !this.state.hintVisible && React.createElement("button", { type: "button", className: "display-hint gradientHeading", onClick: this.showHint }, "( zobrazit n\u00E1pov\u011Bdu )"),
                        this.state.hintVisible && React.createElement(CodeHint_1.default, { hideHint: this.hideHint })),
                    React.createElement("form", { action: "", className: "reservation-note" },
                        React.createElement("label", { className: "textform-label" },
                            React.createElement("span", { className: "textform-label_text" }, "Dal\u0161\u00ED objedn\u00E1vka recept\u016F"),
                            React.createElement("textarea", { name: "note", className: "recipe-input", onChange: function (e) { return updateNote(e.target.value); } })))))));
    };
    return RecipeSectionHeader;
}(React.PureComponent));
exports.default = RecipeSectionHeader;
//# sourceMappingURL=RecipeSectionHeader.js.map