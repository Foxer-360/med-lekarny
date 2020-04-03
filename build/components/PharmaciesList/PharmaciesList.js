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
var ReactMarkdown = require("react-markdown/with-html");
var List_1 = require("../List");
var Link_1 = require("../../partials/Link");
var title_1 = require("./components/title");
var Media_1 = require("../../partials/Media");
var Button_1 = require("../../partials/Button");
var PharmaciesList = function (props) {
    var pharmacies = props.data.pharmacies;
    return (React.createElement(List_1.default, { data: pharmacies }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: "polyclinicsList" }, data &&
            data.map(function (pharmacie, index) { return (React.createElement("div", { className: 'pcitem', key: index },
                React.createElement("div", { className: "fullWidthContainer" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "pcitem__wrapper" },
                            React.createElement("div", { className: 'pcitem__img' }, pharmacie.image && React.createElement(Media_1.default, { data: pharmacie.image, type: "image" })),
                            React.createElement("div", { className: 'pcitem__info' },
                                React.createElement(title_1.default, { name: pharmacie.name && pharmacie.name, buttonText: pharmacie.buttonText, buttonUrl: pharmacie.buttonUrl }),
                                React.createElement("div", { className: "pcitem__info__details" },
                                    React.createElement("div", { className: "pcitem__info__details__item" },
                                        React.createElement("img", { src: "../../../assets/mediconLekarny/images/geoIcon.svg", alt: "Medicon GeoLocation Icon" }),
                                        React.createElement("p", null,
                                            React.createElement(Link_1.default, __assign({}, pharmacie.addressUrl), pharmacie.address && pharmacie.address),
                                            " ",
                                            React.createElement("br", null),
                                            pharmacie.district)),
                                    React.createElement("div", { className: "pcitem__info__details__item" },
                                        React.createElement("img", { src: "../../../assets/mediconLekarny/images/phoneIcon.svg", alt: "Medicon Phone Icon" }),
                                        pharmacie.phone &&
                                            React.createElement("a", { className: "phone", href: "tel:" + pharmacie.phone }, pharmacie.phone)),
                                    React.createElement("div", { className: "pcitem__info__details__item" },
                                        pharmacie.transportImage && React.createElement(Media_1.default, { data: pharmacie.transportImage, type: "image" }),
                                        !pharmacie.transportImage &&
                                            React.createElement("img", { src: "../../../assets/mediconLekarny/images/metro.svg", alt: "" }),
                                        React.createElement("p", null,
                                            pharmacie.transport,
                                            React.createElement("br", null),
                                            pharmacie.station))),
                                pharmacie.services &&
                                    React.createElement("div", { className: 'pcitem__info__list' },
                                        React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: pharmacie.services, renderers: {
                                                // tslint:disable-next-line:no-any
                                                paragraph: function (rProps) { return React.createElement("ul", null, rProps.children); },
                                            } })),
                                pharmacie.description &&
                                    React.createElement("div", { className: 'pcitem__info__desc' },
                                        React.createElement("div", { className: 'pcitem__info__desc__txt' },
                                            React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: pharmacie.description, renderers: {
                                                    // tslint:disable-next-line:no-any
                                                    paragraph: function (rProps) { return React.createElement("p", null, rProps.children); },
                                                } }))),
                                React.createElement("div", { className: 'pcitem__info__btnHolder' },
                                    React.createElement(Button_1.default, { url: pharmacie.url, classes: "btn btn--greenBorder" }, "vice info")))))))); })));
    }));
};
exports.default = PharmaciesList;
//# sourceMappingURL=PharmaciesList.js.map