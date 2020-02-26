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
var pharmaPlaces_1 = require("../pharmaPlaces");
var RecipePickupPick = /** @class */ (function (_super) {
    __extends(RecipePickupPick, _super);
    function RecipePickupPick(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectedPickupPoint: '',
        };
        return _this;
    }
    RecipePickupPick.prototype.updateSelectedPickupPoint = function (id) {
        this.props.updatePickupPlace(id);
        return this.setState({ selectedPickupPoint: id });
    };
    RecipePickupPick.prototype.render = function () {
        var _this = this;
        var placeState = this.state.selectedPickupPoint;
        return (React.createElement("div", { className: "container recipe-pickup-place" },
            React.createElement("span", { className: "subheadline" }, "V\u00FDb\u011Br lek\u00E1rny, kde si l\u00E9ky vyzvednu"),
            React.createElement("div", { className: "row" }, pharmaPlaces_1.default.map(function (place) {
                return (React.createElement("div", { key: place.id, className: "col-6 pickup-point_wrap" },
                    React.createElement("div", { className: "pickup-point" },
                        React.createElement("img", { src: '/assets/mediconLekarny/images/mediconLekarnyLogo.png', alt: 'pharmacentrum logo' }),
                        React.createElement("p", { className: "address address-bold" }, place.address1),
                        React.createElement("p", { className: "address" }, place.address2),
                        React.createElement("p", { className: "address" }, place.openHours),
                        React.createElement("button", { className: "recipe-btn btn-plus " + (placeState === place.id ? 'selected' : ''), onClick: function () { return _this.updateSelectedPickupPoint(place.id); } }, placeState === place.id ? 'Vyzvednu zde' : 'Vybrat lékárnu'))));
            }))));
    };
    return RecipePickupPick;
}(React.Component));
exports.default = RecipePickupPick;
//# sourceMappingURL=RecipePickupPick.js.map