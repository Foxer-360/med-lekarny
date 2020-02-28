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
var RecipeReservationSubmit = /** @class */ (function (_super) {
    __extends(RecipeReservationSubmit, _super);
    function RecipeReservationSubmit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecipeReservationSubmit.prototype.render = function () {
        return (React.createElement("section", { className: "row recipe-owner-info submit-wrapper" },
            React.createElement("button", { type: "button", className: "btn recipe-btn submit-btn" }, "Odeslat rezervaci")));
    };
    return RecipeReservationSubmit;
}(React.Component));
exports.default = RecipeReservationSubmit;
//# sourceMappingURL=RecipeReservationSubmit.js.map