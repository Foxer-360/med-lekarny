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
var RecipeSectionHeader_1 = require("./components/RecipeSectionHeader");
var RecipePickupPick_1 = require("./components/RecipePickupPick/RecipePickupPick");
var RecipeOwnerInfo_1 = require("./components/RecipeOwnerInfo/RecipeOwnerInfo");
var RecipeReservation = /** @class */ (function (_super) {
    __extends(RecipeReservation, _super);
    function RecipeReservation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecipeReservation.prototype.render = function () {
        return (React.createElement("div", { className: "recipe-reservation-page" },
            React.createElement(RecipeSectionHeader_1.default, null),
            React.createElement(RecipePickupPick_1.default, null),
            React.createElement(RecipeOwnerInfo_1.default, null)));
    };
    return RecipeReservation;
}(React.Component));
exports.default = RecipeReservation;
//# sourceMappingURL=RecipeReservation.js.map