var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import Social from './components/Social';
import HelpPopup from './components/HelpPopup';
import Link from '@source/partials/Link';
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        return _super.call(this, props) || this;
    }
    Footer.prototype.render = function () {
        var _a = this.props.data, links = _a.links, icons = _a.icons, copyrights = _a.copyrights, gdprText = _a.gdprText, gdprUrl = _a.gdprUrl;
        return (React.createElement("footer", null,
            React.createElement(HelpPopup, null),
            React.createElement("div", { className: 'footer' },
                React.createElement("div", { className: 'container' },
                    React.createElement("div", null,
                        React.createElement("ul", { className: 'footer__list' }, links && links.map(function (link, i) { return (React.createElement("li", null,
                            React.createElement(Link, { key: i, url: link.url && link.url }, link.title && link.title))); })),
                        React.createElement(Social, { icons: icons }))),
                React.createElement("div", { className: 'footer__left' }),
                React.createElement("div", { className: 'footer__right' })),
            React.createElement("div", { className: "bottom" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "bottom__copyrights grid" },
                        React.createElement("p", null, copyrights && copyrights),
                        React.createElement(Link, { url: gdprUrl && gdprUrl }, gdprText && gdprText))))));
    };
    return Footer;
}(React.Component));
export default Footer;
//# sourceMappingURL=Footer.js.map