"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var InfoElement_1 = require("./components/InfoElement");
var InfoBoxes = function (props) {
    var _a = props.data, title = _a.title, dividerOnTop = _a.dividerOnTop, indentAtBottom = _a.indentAtBottom, boxes = _a.boxes;
    return (React.createElement(List_1.default, { data: boxes }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: "info-boxes " + (indentAtBottom ? 'info-boxes--paddingBottom' : '') },
            React.createElement("div", { className: 'container' },
                dividerOnTop ? React.createElement("div", { className: 'info-boxes__divider' }) : '',
                title && React.createElement("h3", null, title),
                React.createElement("div", { className: 'info-boxes__list row' }, data && data.map(function (box, i) { return (React.createElement(InfoElement_1.default, { key: i, url: box.url, title: box.title, image: box.image })); })))));
    }));
};
exports.default = InfoBoxes;
//# sourceMappingURL=InfoBoxes.js.map