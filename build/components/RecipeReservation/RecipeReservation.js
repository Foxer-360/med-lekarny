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
    function RecipeReservation(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            recipeCodesArray: [],
            pickupPlace: '',
        };
        _this.updatePickupPlace = _this.updatePickupPlace.bind(_this);
        return _this;
    }
    RecipeReservation.prototype.updateRecipesArray = function (recipes) {
        console.log('update recipes array', recipes);
    };
    RecipeReservation.prototype.updatePickupPlace = function (placeId) {
        this.setState({ pickupPlace: placeId });
    };
    RecipeReservation.prototype.render = function () {
        return (React.createElement("div", { className: "recipe-reservation-page" },
            console.log(this.state.recipeCodesArray),
            React.createElement(RecipeSectionHeader_1.default, { recipesArray: this.state.recipeCodesArray, updateRecipesArray: this.updateRecipesArray }),
            React.createElement(RecipePickupPick_1.default, { updatePickupPlace: this.updatePickupPlace }),
            React.createElement(RecipeOwnerInfo_1.default, null)));
    };
    return RecipeReservation;
}(React.Component));
exports.default = RecipeReservation;
//# sourceMappingURL=RecipeReservation.js.map