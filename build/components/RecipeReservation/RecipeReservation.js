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
;
var RecipeReservation = /** @class */ (function (_super) {
    __extends(RecipeReservation, _super);
    function RecipeReservation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecipeReservation.prototype.render = function () {
        return (React.createElement("div", { className: "recipe-reservation" },
            React.createElement("div", { className: "container" },
                React.createElement("h1", null, "Rezervace e-receptu"))));
    };
    return RecipeReservation;
}(React.Component));
exports.default = RecipeReservation;
//# sourceMappingURL=RecipeReservation.js.map