import * as React from 'react';
import Media from '@source/partials/Media';
var PolyclinicInfo = function (props) {
    var _a = props.data, geo = _a.geo, phone = _a.phone, transport = _a.transport, transportImage = _a.transportImage;
    return (React.createElement("div", { className: 'policlinicInfo' },
        React.createElement("div", { className: 'policlinicInfo__item' },
            React.createElement("img", { src: '/assets/mediconLekarny/images/geo.svg', alt: "address" }),
            geo && React.createElement("p", null, geo)),
        React.createElement("div", { className: 'policlinicInfo__item' },
            React.createElement("img", { src: '/assets/mediconLekarny/images/phone.svg', alt: "phone nubmer" }),
            phone && React.createElement("p", null, phone)),
        React.createElement("div", { className: 'policlinicInfo__item' },
            (transportImage && React.createElement(Media, { type: 'image', data: transportImage })) || (React.createElement("img", { src: '/assets/mediconLekarny/images/metro.svg', alt: "metro" })),
            transport && React.createElement("p", null, transport))));
};
export default PolyclinicInfo;
//# sourceMappingURL=PolyclinicInfo.js.map