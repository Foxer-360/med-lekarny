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
var react_1 = require("react");
var RecipePickupPick = /** @class */ (function (_super) {
    __extends(RecipePickupPick, _super);
    function RecipePickupPick() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecipePickupPick.prototype.render = function () {
        return (react_1.default.createElement("div", null, "radio na selecgt"));
    };
    return RecipePickupPick;
}(react_1.Component));
exports.default = RecipePickupPick;
//# sourceMappingURL=RecipePickupPick.js.map