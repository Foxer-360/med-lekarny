"use strict";
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
var List_1 = require("../List");
var Link_1 = require("@source/partials/Link");
var Media_1 = require("@source/partials/Media");
var getImageUrl_1 = require("@source/helpers/getImageUrl");
var MenuBlocks = function (props) {
    var menuBlocks = props.data.menuBlocks;
    return (React.createElement(List_1.default, { data: menuBlocks }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'menu-blocks grid' }, data && data.map(function (block, i) {
                return (React.createElement(Link_1.default, __assign({ key: i }, block.url, { className: 'menu-blocks__item', style: { backgroundImage: block.image && "url(" + getImageUrl_1.default(block.image) + ")" } }),
                    block.icon && React.createElement(Media_1.default, { type: 'image', data: block.icon }),
                    React.createElement("p", null, block.title && block.title),
                    React.createElement("div", { className: 'menu-blocks__item__colorGradient', style: {
                            background: "linear-gradient(40deg, " + (block.color && block.color || '#3eac49') + " 0%, \n                        transparent 100%)"
                        } })));
            }))));
    }));
};
exports.default = MenuBlocks;
//# sourceMappingURL=MenuBlocks.js.map