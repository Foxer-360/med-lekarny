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
var Media_1 = require("../../partials/Media");
var Pharmacies = function (props) {
    var pharmacies = props.data.pharmacies;
    return (React.createElement(List_1.default, { data: pharmacies }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: 'pharmacies' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'pharmacies__divider' },
                    React.createElement("div", null,
                        React.createElement("img", { alt: 'divider image', src: '/assets/mediconLekarny/images/pharmacies-divider-ad.png' })),
                    React.createElement("div", null,
                        React.createElement("img", { alt: 'divider image', src: '/assets/mediconLekarny/images/pharmacies-divider.png' })),
                    React.createElement("div", null,
                        React.createElement("img", { alt: 'divider image', src: '/assets/mediconLekarny/images/pharmacies-divider-ad.png' })),
                    React.createElement("br", { style: { clear: 'both' } })),
                React.createElement("div", { className: 'pharmacies__list row' }, data && data.map(function (pharmacie, i) {
                    var text = pharmacie.text, image = pharmacie.image, title = pharmacie.title, address = pharmacie.address, addressUrl = pharmacie.addressUrl, pharmacieUrl = pharmacie.pharmacieUrl;
                    return (React.createElement("div", { key: i, className: 'pharmacies__list__item col-12 col-md-6 col-xl-3' },
                        image &&
                            React.createElement(Link_1.default, __assign({}, pharmacieUrl),
                                React.createElement(Media_1.default, { type: 'image', data: image })),
                        title && React.createElement(ReactMarkdown, { source: title }),
                        React.createElement(Link_1.default, __assign({}, addressUrl), address),
                        text && React.createElement(ReactMarkdown, { source: text })));
                })))));
    }));
};
exports.default = Pharmacies;
//# sourceMappingURL=Pharmacies.js.map