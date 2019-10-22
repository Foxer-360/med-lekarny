"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("../../../partials/Button");
var Title = function (props) {
    return (React.createElement("div", { className: 'pcTitle' },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-6 align-content-center" },
                React.createElement("img", { src: "/assets/mediconLekarny/images/logo.svg", alt: "Medicon Logo" }),
                React.createElement("div", { className: 'pcTitle__title' },
                    React.createElement("h3", null, "L\u00E9k\u00E1rna"),
                    React.createElement("div", { className: 'pcTitle__title__subtitle' },
                        React.createElement("span", null, props.name),
                        React.createElement("span", { className: 'pcTitle__title__subtitle__circles' },
                            React.createElement("div", null),
                            React.createElement("div", null),
                            React.createElement("div", null),
                            React.createElement("div", null),
                            React.createElement("div", null),
                            React.createElement("div", null))))),
            React.createElement("div", { className: "col-md-6" },
                React.createElement(Button_1.default, { classes: 'btn--orangeBorder res_recipe' }, "rezervace e-\u2060recept\u016F")))));
};
exports.default = Title;
//# sourceMappingURL=title.js.map