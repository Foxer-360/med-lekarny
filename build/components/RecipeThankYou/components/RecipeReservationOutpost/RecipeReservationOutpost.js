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
var pharmaPlaces_1 = require("../../../RecipeReservation/components/pharmaPlaces");
var RecipeReservationOutpost = /** @class */ (function (_super) {
    __extends(RecipeReservationOutpost, _super);
    function RecipeReservationOutpost(props) {
        var _this = _super.call(this, props) || this;
        _this.findPlace = _this.findPlace.bind(_this);
        return _this;
    }
    RecipeReservationOutpost.prototype.findPlace = function () {
        var id = this.props.place;
        return pharmaPlaces_1.default.filter(function (place) {
            return place.id.toUpperCase() === id.toUpperCase();
        })[0];
    };
    RecipeReservationOutpost.prototype.render = function () {
        var place = this.findPlace();
        return (React.createElement("div", { className: "outpost-wrapper" },
            React.createElement("img", { className: 'outpost-logo', alt: 'Medicon logo', src: '/assets/mediconLekarny/images/logo.svg' }),
            React.createElement("p", { className: "address address-bold" }, place.name),
            React.createElement("p", { className: "address" }, place.address1),
            React.createElement("p", { className: "address" }, place.address2),
            React.createElement("p", { className: "address" }, place.openHours1),
            React.createElement("p", { className: "address" }, place.openHours2)));
    };
    return RecipeReservationOutpost;
}(React.Component));
exports.default = RecipeReservationOutpost;
//# sourceMappingURL=RecipeReservationOutpost.js.map