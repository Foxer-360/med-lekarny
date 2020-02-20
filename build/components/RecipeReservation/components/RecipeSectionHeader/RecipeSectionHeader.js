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
var TextBlock_1 = require("../../../TextBlock");
var data = {
    title: 'Rezervace e-receptů',
    text: 'Rezervujte si léky z Vašeho receptu předem a ušetřete si dvojí cestu do lékárny! Stačí vyplnit kód Vašeho e-receptu nebo název Vašeho léku a my Vám dáme vědět, kdy budou Vaše léky připraveny k vyzvednutí. Můžete si zarezervovat i další volně prodejné přípravky.',
};
var RecipeSectionHeader = /** @class */ (function (_super) {
    __extends(RecipeSectionHeader, _super);
    function RecipeSectionHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecipeSectionHeader.prototype.render = function () {
        return (React.createElement("header", { className: "recipe-header" },
            React.createElement("div", { className: "container" },
                React.createElement(TextBlock_1.default, { data: data }),
                React.createElement("section", { className: "recipe-illustrations" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-4 ilu-column" },
                            React.createElement("img", { alt: 'receipt image', src: '/assets/mediconLekarny/images/recept-list.png' }),
                            React.createElement("span", { className: "ilu-title" }, "RECEPT")),
                        React.createElement("div", { className: "col-md-4 ilu-column" },
                            React.createElement("img", { alt: 'receipt image', src: '/assets/mediconLekarny/images/recept-phone.png' }),
                            React.createElement("span", { className: "ilu-title" }, "SMS")),
                        React.createElement("div", { className: "col-md-4 ilu-column" },
                            React.createElement("img", { alt: 'receipt image', src: '/assets/mediconLekarny/images/recept-pc.png' }),
                            React.createElement("span", { className: "ilu-title" }, "E-MAIL"))),
                    React.createElement("div", { className: "row ilu-text" },
                        React.createElement("p", { className: "text text-center" }, "Zde najdete identifik\u00E1tor Va\u0161eho receptu."),
                        React.createElement("p", { className: "text text-center text-cursive" }, "Jde o 12-m\u00EDstn\u00FD alfanumerick\u00FD k\u00F3d, \u010D\u00E1rov\u00FD k\u00F3d, QR k\u00F3d nebo odkaz ke sta\u017Een\u00ED k\u00F3du."))),
                React.createElement("section", { className: "recipe-input-wrapper" },
                    React.createElement("h4", { className: "headline" }, "K\u00F3d e-receptu"),
                    React.createElement("div", { className: "form-wrapper" },
                        React.createElement("input", { type: "text", className: "recipe-input", placeholder: "za\u010Dn\u011Bte ps\u00E1t" }),
                        React.createElement("span", { className: "center-word" }, "nebo"),
                        React.createElement("button", { className: "recipe-btn" },
                            "Nahr\u00E1t foto",
                            React.createElement("span", { className: "plus-icon" })))))));
    };
    return RecipeSectionHeader;
}(React.Component));
exports.default = RecipeSectionHeader;
//# sourceMappingURL=RecipeSectionHeader.js.map