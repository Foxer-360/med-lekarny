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
                React.createElement("div", { className: 'pharmacies__list grid' }, data && data.map(function (pharmacie, i) { return (React.createElement("div", { key: i, className: 'pharmacies__list__item' },
                    pharmacie.image &&
                        React.createElement(Link, { url: pharmacie.pharmacieUrl && pharmacie.pharmacieUrl.url },
                            React.createElement(Media, { type: 'image', data: pharmacie.image })),
                    pharmacie.title && React.createElement(ReactMarkdown, { source: pharmacie.title }),
                    React.createElement(Link, { urlNewWindow: true, url: pharmacie.addressUrl && pharmacie.addressUrl.url }, pharmacie.address && pharmacie.address),
                    pharmacie.text && React.createElement(ReactMarkdown, { source: pharmacie.text }))); })))));
    }));
};
export default Pharmacies;
//# sourceMappingURL=Pharmacies.js.map