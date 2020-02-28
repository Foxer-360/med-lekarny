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
var RecipeSectionHeader_1 = require("./components/RecipeSectionHeader");
var RecipePickupPick_1 = require("./components/RecipePickupPick/RecipePickupPick");
var RecipeOwnerInfo_1 = require("./components/RecipeOwnerInfo/RecipeOwnerInfo");
var axios_1 = require("axios");
var RecipeReservation = /** @class */ (function (_super) {
    __extends(RecipeReservation, _super);
    function RecipeReservation(props) {
        var _this = _super.call(this, props) || this;
        _this.onSubmit = function () {
            var _a = _this.state, recipeOwner = _a.recipeOwner, note = _a.note, pickupPlace = _a.pickupPlace, recipeCodesArray = _a.recipeCodesArray;
            axios_1.default.post('http://medicon.foxer360.com:3030/', __assign({}, recipeOwner, { pharmacy: pickupPlace, body: "eRecepty: " + recipeCodesArray.join(', ') + "\n\n " + note })).then(function () {
                //todo redirect
                console.log('sumbiting');
            }).catch(function (e) {
                alert('stala se chyba');
            });
        };
        _this.updateRecipesArray = function (recipeCodesArray) {
            _this.setState({ recipeCodesArray: recipeCodesArray });
        };
        _this.updatePickupPlace = function (pickupPlace) {
            _this.setState({ pickupPlace: pickupPlace });
        };
        _this.updateOwnerInfo = function (recipeOwner) {
            _this.setState({ recipeOwner: recipeOwner });
        };
        _this.updateNote = function (note) {
            _this.setState({ note: note });
        };
        _this.state = {
            recipeCodesArray: [],
            recipeOwner: {
                name: '',
                phone: '',
                email: '',
                contactByPhone: false,
                contactBySMS: true,
                gdpr: false,
                errors: {}
            },
            note: '',
            pickupPlace: '',
        };
        return _this;
    }
    RecipeReservation.prototype.render = function () {
        return (React.createElement("div", { className: "recipe-reservation-page" },
            React.createElement(RecipeSectionHeader_1.default, { updateNote: this.updateNote, note: this.state.note, recipesArray: this.state.recipeCodesArray, updateRecipesArray: this.updateRecipesArray }),
            React.createElement(RecipePickupPick_1.default, { pickupPlace: this.state.pickupPlace, updatePickupPlace: this.updatePickupPlace }),
            React.createElement(RecipeOwnerInfo_1.default, { owner: this.state.recipeOwner, updateMainComponent: this.updateOwnerInfo }),
            React.createElement("section", { className: "row recipe-owner-info submit-wrapper", style: { textAlign: 'center', paddingBottom: 30, paddingTop: 0 } },
                React.createElement("button", { onClick: this.onSubmit, style: { margin: 'auto' }, type: "button", className: "btn recipe-btn submit-btn" }, "Odeslat rezervaci"))));
    };
    return RecipeReservation;
}(React.Component));
exports.default = RecipeReservation;
//# sourceMappingURL=RecipeReservation.js.map