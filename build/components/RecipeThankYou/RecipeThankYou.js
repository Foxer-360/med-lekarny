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
var RecipeReservationOutpost_1 = require("./components/RecipeReservationOutpost/RecipeReservationOutpost");
var RecipeThankYou = /** @class */ (function (_super) {
    __extends(RecipeThankYou, _super);
    function RecipeThankYou() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecipeThankYou.prototype.render = function () {
        var now = new Date(Date.now());
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var date = now.toLocaleDateString('cs-CZ', options);
        return (React.createElement("div", { className: "recipe-thankyou-page" },
            React.createElement("div", { className: "gray-part pdt80" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-8 offset-md-2" },
                            React.createElement("h1", { className: "gradientHeading" }, "D\u011Bkujeme"),
                            React.createElement("p", { className: "text" },
                                "\u010D\u00EDslo va\u0161eho e-receptu je",
                                React.createElement("br", null),
                                React.createElement("span", { className: "text-turquoise" }, "1234567890")),
                            React.createElement("p", { className: "text" },
                                "datum va\u0161\u00ED rezervace:",
                                React.createElement("br", null),
                                React.createElement("span", { className: "text-turquoise" }, date)))))),
            React.createElement("div", { className: "white-part" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "col-md-8 offset-md-2" },
                        React.createElement("p", { className: "text" }, "vybrali jste si pobo\u010Dku"),
                        React.createElement(RecipeReservationOutpost_1.default, null)))),
            React.createElement("div", { className: "gray-part" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-8 offset-md-2" },
                            React.createElement("p", null,
                                "Vy\u010Dkejte na potvrzovac\u00ED e-mail / sms,",
                                React.createElement("br", null),
                                "\u017Ee jsou Va\u0161e l\u00E9ky p\u0159ipraveny k vyzvednut\u00ED."),
                            React.createElement("img", { className: 'done', alt: 'done', src: '/assets/mediconLekarny/images/fajfka.png' })))))));
    };
    return RecipeThankYou;
}(React.Component));
exports.default = RecipeThankYou;
//# sourceMappingURL=RecipeThankYou.js.map