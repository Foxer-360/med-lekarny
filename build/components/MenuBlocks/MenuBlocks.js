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
var Link_1 = require("../../partials/Link");
var Media_1 = require("../../partials/Media");
var getUrl_1 = require("../../helpers/getUrl");
var MenuBlocks = function (props) {
    var menuBlocks = props.data.menuBlocks;
    return (React.createElement(List_1.default, { data: menuBlocks }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'menu-blocks row' }, data && data.map(function (block, i) {
                return (React.createElement("div", { key: i, className: "" + (i <= 1 ? 'col-12 col-md-6 ' : 'col-12 col-md-4 col-xl-3') },
                    React.createElement("div", { className: "menu-blocks__item " + (i <= 1 ? 'bigMenuBlock' : ''), style: { backgroundImage: block.image && "url(" + getUrl_1.default(block.image) + ")" } },
                        React.createElement(Link_1.default, __assign({}, block.url, { style: {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 1000
                            } })),
                        block.icon && React.createElement(Media_1.default, { type: 'image', data: block.icon }),
                        block.title && React.createElement("p", null, block.title),
                        React.createElement("div", { className: 'menu-blocks__item__colorGradient', style: {
                                background: "linear-gradient(40deg, " + (block.color && block.color || '#3eac49') + " 0%, \n                          transparent 100%)"
                            } }))));
            }))));
    }));
};
exports.default = MenuBlocks;
//# sourceMappingURL=MenuBlocks.js.map