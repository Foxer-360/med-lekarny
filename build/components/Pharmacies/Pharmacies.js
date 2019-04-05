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
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
var Pharmacies = function (props) {
    var pharmacies = props.data.pharmacies;
    return (React.createElement(List, { data: pharmacies }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: 'pharmacies' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'pharmacies__divider' },
                    React.createElement("div", null,
                        React.createElement("img", { src: '/assets/mediconLekarny/images/pharmacies-divider-ad.png' })),
                    React.createElement("div", null,
                        React.createElement("img", { src: '/assets/mediconLekarny/images/pharmacies-divider.png' })),
                    React.createElement("div", null,
                        React.createElement("img", { src: '/assets/mediconLekarny/images/pharmacies-divider-ad.png' })),
                    React.createElement("br", { style: { clear: 'both' } })),
                React.createElement("div", { className: 'pharmacies__list grid' }, data && data.map(function (pharmacie, i) {
                    var text = pharmacie.text, image = pharmacie.image, title = pharmacie.title, address = pharmacie.address, addressUrl = pharmacie.addressUrl, pharmacieUrl = pharmacie.pharmacieUrl;
                    return (React.createElement("div", { key: i, className: 'pharmacies__list__item' },
                        image &&
                            React.createElement(Link, __assign({}, pharmacieUrl),
                                React.createElement(Media, { type: 'image', data: image })),
                        title && React.createElement(ReactMarkdown, { source: title }),
                        React.createElement(Link, __assign({}, addressUrl), address),
                        text && React.createElement(ReactMarkdown, { source: text })));
                })))));
    }));
};
export default Pharmacies;
//# sourceMappingURL=Pharmacies.js.map