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
var Link_1 = require("../../partials/Link");
var Media_1 = require("../../partials/Media");
var PharmacieInfo = function (props) {
    var _a = props.data, geo = _a.geo, geoUrl = _a.geoUrl, phone = _a.phone, transport = _a.transport, transportImage = _a.transportImage, officeHours = _a.officeHours;
    return (React.createElement("div", { className: 'pharmacie-info' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'pharmacie-info__top-divider' }),
            React.createElement("div", { className: 'pharmacie-info__content row' },
                React.createElement("div", { className: 'pharmacie-info__content__item col-sm-12 col-md-6 col-lg-3' },
                    React.createElement("img", { src: '/assets/mediconLekarny/images/phoneIcon.svg', alt: "phone nubmer" }),
                    phone && React.createElement("a", { href: "tel:" + phone }, phone)),
                React.createElement("div", { className: 'pharmacie-info__content__item col-sm-12 col-md-6 col-lg-3' },
                    React.createElement("img", { src: '/assets/mediconLekarny/images/geoIcon.svg', alt: "address" }),
                    React.createElement(Link_1.default, __assign({}, geoUrl), geo)),
                React.createElement("div", { className: 'pharmacie-info__content__item col-sm-12 col-md-6 col-lg-3' },
                    React.createElement("img", { src: '/assets/mediconLekarny/images/officeHours.svg', alt: "office hours" }),
                    React.createElement("p", null, officeHours)),
                React.createElement("div", { className: 'pharmacie-info__content__item col-sm-12 col-md-6 col-lg-3' },
                    (transportImage && React.createElement(Media_1.default, { type: 'image', data: transportImage })) || (React.createElement("img", { src: '/assets/mediconLekarny/images/metro.svg', alt: "metro" })),
                    React.createElement("p", null, transport))),
            React.createElement("div", { className: 'pharmacie-info__bottom-divider' }))));
};
exports.default = PharmacieInfo;
//# sourceMappingURL=PharmacieInfo.js.map