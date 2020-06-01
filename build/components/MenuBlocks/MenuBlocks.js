"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var Media_1 = require("../../partials/Media");
var getImgUrl_1 = require("../../helpers/getImgUrl");
var Button_1 = require("../../partials/Button");
var MenuBlocks = function (props) {
    var menuBlocks = props.data.menuBlocks;
    return (React.createElement(List_1.default, { data: menuBlocks }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'menu-blocks row' }, data && data.map(function (block, i) {
                return (React.createElement("div", { key: i, className: "" + (i <= 1 ? 'col-12 col-md-6 ' : 'col-12 col-md-4 col-xl-3') },
                    React.createElement("div", { className: "menu-blocks__item " + (i <= 1 ? 'bigMenuBlock' : ''), style: { backgroundImage: block.image && "url(" + getImgUrl_1.default(block.image) + ")" } },
                        React.createElement("div", { className: 'menu-blocks__item__content' },
                            block.icon && React.createElement(Media_1.default, { type: 'image', data: block.icon }),
                            React.createElement("div", { className: 'menu-blocks__item__content__bottom' },
                                block.title && React.createElement("p", null, block.title),
                                block.url && React.createElement(Button_1.default, { url: block.url, classes: 'btn btn--fullWidth btn--whiteBorder' }, "v\u00EDce info"))),
                        React.createElement("div", { className: 'menu-blocks__item__colorGradient', style: {
                                background: "linear-gradient(40deg, " + (block.color && block.color || '#3eac49') + " 0%, \n                          transparent 100%)"
                            } }))));
            }))));
    }));
};
exports.default = MenuBlocks;
//# sourceMappingURL=MenuBlocks.js.map