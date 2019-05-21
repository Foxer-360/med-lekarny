"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown");
var TextBlock = function (props) {
    var _a = props.data, title = _a.title, text = _a.text;
    return (React.createElement("section", { className: "textBlock " + (title ? '' : 'textBlock--notTitled') },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'textBlock__container' },
                title && React.createElement("h3", { className: 'gradientHeading' }, title),
                text && (React.createElement("div", { className: "textBlock__container__text" },
                    React.createElement(ReactMarkdown, { source: text, renderers: {
                            // tslint:disable-next-line:no-any
                            paragraph: function (rProps) { return React.createElement(React.Fragment, null, rProps.children); },
                        } })))))));
};
exports.default = TextBlock;
//# sourceMappingURL=TextBlock.js.map