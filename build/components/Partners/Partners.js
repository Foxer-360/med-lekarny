import * as React from 'react';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
var Partners = function (props) {
    var _a = props.data, title = _a.title, partners = _a.partners;
    return (React.createElement("div", { className: 'partners' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'partners__divider' }),
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: 'partners__list grid' }, partners && partners.map(function (partner, i) {
                return (React.createElement(Link, { key: i, url: partner.url && partner.url.url }, partner.image && React.createElement(Media, { type: 'image', data: partner.image })));
            })))));
};
export default Partners;
//# sourceMappingURL=Partners.js.map