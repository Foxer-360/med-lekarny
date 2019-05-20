"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Headline = function (props) {
    var _a = props.data, title = _a.title, displayOnTop = _a.displayOnTop;
    return (React.createElement("div", { className: "headline " + (displayOnTop ? 'headline--paddingTop' : '') }, title && React.createElement("h3", null, title)));
};
exports.default = Headline;
//# sourceMappingURL=Headline.js.map