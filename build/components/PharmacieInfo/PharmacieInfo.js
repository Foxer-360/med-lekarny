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
var ReactMarkdown = require("react-markdown/with-html");
var PharmacieInfo = function (props) {
    var _a = props.data, geo = _a.geo, geoUrl = _a.geoUrl, emailAddress = _a.emailAddress, phone = _a.phone, transport = _a.transport, transportImage = _a.transportImage, officeHours = _a.officeHours;
    return (React.createElement("div", { className: 'pharmacie-info' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'pharmacie-info__top-divider' }),
            React.createElement("div", { className: 'pharmacie-info__content row' },
                phone && React.createElement("div", { className: 'pharmacie-info__content__item col-sm-12 col-md-6 col-xl-3' },
                    React.createElement("img", { src: '/assets/mediconLekarny/images/phoneIcon.svg', alt: "phone nubmer" }),
                    phone && React.createElement("a", { className: "phone", href: "tel:" + phone }, phone)),
                geo && geo.trim().length > 0
                    && React.createElement("div", { className: 'pharmacie-info__content__item col-sm-12 col-md-6 col-xl-3' },
                        React.createElement("img", { src: '/assets/mediconLekarny/images/geoIcon.svg', alt: "address" }),
                        React.createElement(Link_1.default, __assign({}, geoUrl), geo)),
                emailAddress && emailAddress.trim().length > 0
                    && React.createElement("div", { className: 'pharmacie-info__content__item col-sm-12 col-md-6 col-xl-3' },
                        React.createElement("img", { src: '/assets/mediconLekarny/images/emailIcon.jpg', alt: "email", height: "50", width: "50" }),
                        React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: emailAddress })),
                officeHours && React.createElement("div", { className: 'pharmacie-info__content__item col-sm-12 col-md-6 col-xl-3' },
                    React.createElement("img", { src: '/assets/mediconLekarny/images/officeHours.svg', alt: "office hours" }),
                    React.createElement("p", null, officeHours)),
                transport && React.createElement("div", { className: 'pharmacie-info__content__item col-sm-12 col-md-6 col-xl-3' },
                    (transportImage && React.createElement(Media_1.default, { type: 'image', data: transportImage })) || (React.createElement("img", { src: '/assets/mediconLekarny/images/metro.svg', alt: "metro" })),
                    React.createElement("p", null, transport))),
            React.createElement("div", { className: 'pharmacie-info__bottom-divider' }))));
};
exports.default = PharmacieInfo;
//# sourceMappingURL=PharmacieInfo.js.map