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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecipeOwnerInfo.prototype.render = function () {
        return (React.createElement("div", { className: "row recipe-owner-info" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-6 offset-md-3 form-wrap" },
                        React.createElement("label", { className: "center" },
                            "Jm\u00E9no a P\u0159\u00EDjmen\u00ED",
                            React.createElement("input", { type: "text", name: "name" })),
                        React.createElement("label", { className: "center" },
                            "Telefon",
                            React.createElement("input", { type: "text", name: "phone" })),
                        React.createElement("label", { className: "center" },
                            "E-mail",
                            React.createElement("input", { type: "text", name: "email" })),
                        React.createElement("label", { className: "center" },
                            "Pozn\u00E1mka",
                            React.createElement("input", { type: "text", name: "note" })),
                        React.createElement("div", { className: "contact-choose" },
                            React.createElement("span", null, "Jak chcete, abychom v\u00E1s kontaktovali?"),
                            React.createElement("label", null,
                                React.createElement("input", { name: "contactWay", type: "checkbox", checked: false, onChange: function () { return console.log('ahoj'); } }),
                                "E-mailem"),
                            React.createElement("label", null,
                                React.createElement("input", { name: "contactWay", type: "checkbox", checked: false, onChange: function () { return console.log('ahoj'); } }),
                                "P\u0159es sms")),
                        React.createElement("label", { className: "gdpr-info" },
                            React.createElement("input", { name: "dgpr", type: "checkbox", checked: false, onChange: function () { return console.log('ne'); } }),
                            "Pou\u010Den\u00ED o zpracov\u00E1n\u00ED \u00FAdaj\u016F"),
                        React.createElement("a", { href: "https://www.stahnisipodminkyzmediconasapredtimnastavadresu.cz", className: "link" }, "St\u00E1hnout podm\u00EDnky zpracov\u00E1n\u00ED \u00FAdaj\u016F"),
                        React.createElement("button", { type: "button", className: "recipe-btn submit-btn" }, "Odeslat rezervaci"))))));
    };
    return RecipeOwnerInfo;
}(React.Component));
exports.default = RecipeOwnerInfo;
//# sourceMappingURL=RecipeOwnerInfo.js.map