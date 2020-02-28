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
    function RecipeReservationOutpost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecipeReservationOutpost.prototype.render = function () {
        console.log('place v kompo', this.props.place, pharmaPlaces_1.default);
        return (React.createElement("div", { className: "outpost-wrapper" },
            React.createElement("img", { className: 'outpost-logo', alt: 'Medicon logo', src: '/assets/mediconLekarny/images/logo.svg' }),
            React.createElement("p", { className: "address address-bold" }, "A. Sta\u0161ka 1670/80"),
            React.createElement("p", { className: "address" }, "Praha 4"),
            React.createElement("p", { className: "address" }, "140 00"),
            React.createElement("p", { className: "address" }, "po-p\u00E1: 8-19, so: 10-18")));
    };
    return RecipeReservationOutpost;
}(React.Component));
exports.default = RecipeReservationOutpost;
//# sourceMappingURL=RecipeReservationOutpost.js.map