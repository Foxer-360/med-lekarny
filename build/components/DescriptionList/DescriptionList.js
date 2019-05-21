"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown");
var DescriptionList = function (props) {
    var _a = props.data, title = _a.title, text = _a.text;
    return (React.createElement("section", { className: 'description-list' },
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: 'description-list__content' }, text && React.createElement(ReactMarkdown, { source: text })))));
};
exports.default = DescriptionList;
//# sourceMappingURL=DescriptionList.js.map