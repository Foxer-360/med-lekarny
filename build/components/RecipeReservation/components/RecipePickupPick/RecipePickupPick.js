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
var RecipePickupPick = /** @class */ (function (_super) {
    __extends(RecipePickupPick, _super);
    function RecipePickupPick() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecipePickupPick.prototype.render = function () {
        return (React.createElement("div", { className: "container recipe-pickup-place" },
            React.createElement("span", { className: "subheadline" }, "V\u00FDb\u011Br lek\u00E1rny, kde si l\u00E9ky vyzvednu"),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-6 pickup-point_wrap" },
                    React.createElement("div", { className: "pickup-point" },
                        React.createElement("img", { src: '/assets/mediconLekarny/images/pharmacentres/pharma_bud.png', alt: 'pharmacentrum logo' }),
                        React.createElement("p", { className: "address address-bold" }, "A. Sta\u0161ka 1670/80"),
                        React.createElement("p", { className: "address" }, "Praha 4"),
                        React.createElement("p", { className: "address" }, "140 00"),
                        React.createElement("button", { className: "recipe-btn btn-plus" }, "Vybrat l\u00E9k\u00E1rnu"))),
                React.createElement("div", { className: "col-md-6 pickup-point_wrap" },
                    React.createElement("div", { className: "pickup-point" },
                        React.createElement("img", { src: '/assets/mediconLekarny/images/pharmacentres/pharma_bud.png', alt: 'pharmacentrum logo' }),
                        React.createElement("p", { className: "address address-bold" }, "Ro\u0161kotova 1225/1"),
                        React.createElement("p", { className: "address" }, "Praha 4"),
                        React.createElement("p", { className: "address" }, "140 00"),
                        React.createElement("button", { className: "recipe-btn btn-plus" }, "Vybrat l\u00E9k\u00E1rnu"))),
                React.createElement("div", { className: "col-md-6 pickup-point_wrap" },
                    React.createElement("div", { className: "pickup-point" },
                        React.createElement("img", { src: '/assets/mediconLekarny/images/pharmacentres/pharma_vys.png', alt: 'pharmacentrum logo' }),
                        React.createElement("p", { className: "address address-bold" }, "Sokolovsk\u00E1 810/304"),
                        React.createElement("p", { className: "address" }, "Praha 9"),
                        React.createElement("p", { className: "address" }, "190 61"),
                        React.createElement("button", { className: "recipe-btn btn-plus" }, "Vybrat l\u00E9k\u00E1rnu"))),
                React.createElement("div", { className: "col-md-6 pickup-point_wrap" },
                    React.createElement("div", { className: "pickup-point" },
                        React.createElement("img", { src: '/assets/mediconLekarny/images/pharmacentres/pharma_dbk.png', alt: 'pharmacentrum logo' }),
                        React.createElement("p", { className: "address address-bold" }, "Bud\u011Bjovick\u00E1 1667/64"),
                        React.createElement("p", { className: "address" }, "Praha 4"),
                        React.createElement("p", { className: "address" }, "140 00"),
                        React.createElement("button", { className: "recipe-btn btn-plus" }, "Vybrat l\u00E9k\u00E1rnu"))))));
    };
    return RecipePickupPick;
}(React.Component));
exports.default = RecipePickupPick;
//# sourceMappingURL=RecipePickupPick.js.map