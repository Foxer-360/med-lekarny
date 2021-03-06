"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var graphql_tag_1 = require("graphql-tag");
var react_apollo_1 = require("react-apollo");
var react_adopt_1 = require("react-adopt");
var Link_1 = require("../../partials/Link");
var Social_1 = require("./components/Social");
var Loader_1 = require("../../partials/Loader");
var HelpPopup_1 = require("./components/HelpPopup");
var CookiePopup_1 = require("./components/CookiePopup");
var getImgUrl_1 = require("../../helpers/getImgUrl");
var GET_CONTEXT = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client \n  }\n"], ["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client \n  }\n"])));
var GET_PAGES_URLS = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query pagesUrls($language: ID!, $websiteId: ID!) {\n    pagesUrls(where: { language: $language, websiteId: $websiteId }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"], ["\n  query pagesUrls($language: ID!, $websiteId: ID!) {\n    pagesUrls(where: { language: $language, websiteId: $websiteId }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"])));
var ComposedQuery = react_adopt_1.adopt({
    context: function (_a) {
        var render = _a.render;
        return React.createElement(react_apollo_1.Query, { query: GET_CONTEXT }, function (_a) {
            var data = _a.data;
            return render(data);
        });
    },
    getPagesUrls: function (_a) {
        var render = _a.render, _b = _a.context, languageData = _b.languageData, websiteData = _b.websiteData;
        if (!(languageData && websiteData)) {
            return render({});
        }
        return (React.createElement(react_apollo_1.Query, { query: GET_PAGES_URLS, variables: { language: languageData.id, websiteId: websiteData.id } }, function (data) {
            return render(data);
        }));
    },
});
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        return _super.call(this, props) || this;
    }
    Footer.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, icons = _a.icons, copyrights = _a.copyrights, gdprText = _a.gdprText, gdprFile = _a.gdprFile;
        return (React.createElement(ComposedQuery, null, function (_a) {
            var _b = _a.getPagesUrls, loading = _b.loading, error = _b.error, data = _b.data, context = _a.context;
            if (!context.navigationsData ||
                !context.languageData ||
                !context.languagesData ||
                !data ||
                !data.pagesUrls) {
                return React.createElement(Loader_1.default, null);
            }
            if (error) {
                return "Error..." + error;
            }
            var navigations = context.navigationsData, languageCode = context.languageData.code;
            var transformedNavigations = _this.transformNavigationsIntoTree(navigations, data.pagesUrls);
            var bottomNav = 'bottom';
            var bottomNavItems = transformedNavigations && transformedNavigations[bottomNav] ? transformedNavigations[bottomNav] : [];
            return (React.createElement("footer", { style: { position: 'relative', width: '100%', bottom: '0' } },
                React.createElement(HelpPopup_1.default, null),
                React.createElement(CookiePopup_1.default, { lang: context.languageData.code }),
                React.createElement("div", { className: 'footer' },
                    React.createElement("div", { className: 'container' },
                        React.createElement("div", null,
                            React.createElement("ul", { className: 'footer__list' }, bottomNavItems && bottomNavItems.map(function (navItem, i) { return (React.createElement("li", { key: i },
                                React.createElement(Link_1.default, __assign({}, navItem.url), navItem.name || navItem.title))); })),
                            React.createElement(Social_1.default, { icons: icons }))),
                    React.createElement("div", { className: 'footer__left' }),
                    React.createElement("div", { className: 'footer__right' })),
                React.createElement("div", { className: "bottom" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "bottom__copyrights" },
                            React.createElement("div", null,
                                React.createElement("p", null, copyrights),
                                gdprFile && gdprFile.filename &&
                                    React.createElement("a", { href: getImgUrl_1.default(gdprFile), download: true, target: '_blank' }, gdprText)),
                            context.languageData.code === 'sr' && React.createElement("div", null,
                                React.createElement("a", { target: '_blank', href: "https://goo.gl/maps/XnV44iAtzgoUwv4P6" }, "Jovana Du\u0107i\u0107a 68 78 000 Banja Luka"),
                                React.createElement("a", { href: "tel:+38751491710" }, "+387 51 491 710"),
                                React.createElement("a", { href: "mailto:banjaluka@pharmacentrum.ba" }, "banjaluka@pharmacentrum.ba")))))));
        }));
    };
    Footer.prototype.transformNavigationsIntoTree = function (navigation, urls) {
        var _this = this;
        var tree = {};
        if (!navigation || navigation.length < 1) {
            return null;
        }
        navigation.forEach(function (nav) {
            tree[nav.name] = _this.buildNavTree(nav.nodes, null, urls);
        });
        return tree;
    };
    Footer.prototype.buildNavTree = function (nav, parent, urls) {
        var _this = this;
        var res = [];
        nav.forEach(function (node) {
            if (node.parent === parent) {
                var url = urls.find(function (u) { return u.page === node.page; });
                var item = __assign({}, node, url);
                if (node.page) {
                    var children = _this.buildNavTree(nav, node.page, urls);
                    if (children && children.length > 0) {
                        item.children = children;
                    }
                }
                if (node.title && node.link) {
                    item.url = node.link;
                }
                item.url = {
                    url: item.url,
                    pageId: item.id,
                };
                res.push(item);
            }
        });
        res.sort(function (a, b) { return a.order - b.order; });
        return res;
    };
    return Footer;
}(React.Component));
exports.default = Footer;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Footer.js.map