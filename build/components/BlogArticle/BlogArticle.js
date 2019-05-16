"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown");
var Media_1 = require("@source/partials/Media");
var BlogArticle = function (props) {
    var _a = props.data, title = _a.title, image = _a.image, text = _a.text;
    return (React.createElement("div", { className: 'text-block-with-image' },
        React.createElement("div", { className: "container" },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: 'hCenterBlock', style: { maxWidth: 820 } },
                image && React.createElement(Media_1.default, { type: 'image', data: image }),
                text && React.createElement(ReactMarkdown, { source: text })))));
};
exports.default = BlogArticle;
//# sourceMappingURL=BlogArticle.js.map