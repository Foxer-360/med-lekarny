import * as React from 'react';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
var PharmacieInfo = function (props) {
    var _a = props.data, geo = _a.geo, geoUrl = _a.geoUrl, phone = _a.phone, transport = _a.transport, transportImage = _a.transportImage, officeHours = _a.officeHours;
    return (React.createElement("div", { className: 'pharmacie-info' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'pharmacie-info__top-divider' }),
            React.createElement("div", { className: 'pharmacie-info__content' },
                React.createElement("div", { className: 'pharmacie-info__content__item' },
                    React.createElement("img", { src: '/assets/mediconLekarny/images/phoneIcon.svg', alt: "phone nubmer" }),
                    phone && React.createElement("a", { href: "tel:" + phone }, phone)),
                React.createElement("div", { className: 'pharmacie-info__content__item' },
                    React.createElement("img", { src: '/assets/mediconLekarny/images/geoIcon.svg', alt: "address" }),
                    React.createElement(Link, { urlNewWindow: true, url: geoUrl && geoUrl.url }, geo)),
                React.createElement("div", { className: 'pharmacie-info__content__item' },
                    React.createElement("img", { src: '/assets/mediconLekarny/images/officeHours.svg', alt: "office hours" }),
                    React.createElement("p", null, officeHours)),
                React.createElement("div", { className: 'pharmacie-info__content__item' },
                    (transportImage && React.createElement(Media, { type: 'image', data: transportImage })) || (React.createElement("img", { src: '/assets/mediconLekarny/images/metro.svg', alt: "metro" })),
                    React.createElement("p", null, transport))),
            React.createElement("div", { className: 'pharmacie-info__bottom-divider' }))));
};
export default PharmacieInfo;
//# sourceMappingURL=PharmacieInfo.js.map