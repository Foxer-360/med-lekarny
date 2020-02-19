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
var lodash_1 = require("lodash");
var components_1 = require("../../components");
var resources = require("./resources");
/**
 *
 */
var ComponentsService = /** @class */ (function () {
    function ComponentsService() {
        this.Types = {
            HERO: 'Hero',
            HEADER: 'Header',
            FOOTER: 'Footer',
            REVIEWS: 'Reviews',
            TEXTBLOCK: 'TextBlock',
            INFOBOXES: 'InfoBoxes',
            PHARMACIESLIST: 'PharmaciesList',
            INFORECTANGLES: 'InfoRectangles',
            BLOG: 'Blog',
            DESCRIPTIONLIST: 'DescriptionList',
            PHARMACIES: 'Pharmacies',
            MENUBLOCKS: 'MenuBlocks',
            PROMOTIONPREVIEWS: 'PromotionPreviews',
            CAROUSEL: 'Carousel',
            HEADLINE: 'Headline',
            CUSTOMINFOBOXES: 'CustomInfoBoxes',
            PHARMACIEINFO: 'PharmacieInfo',
            GALLERY: 'Gallery',
            DISCOUNTOFFER: 'DiscountOffer',
            PROMOTIONSANDDISCOUNTS: 'PromotionsAndDiscounts',
            PARTNERS: 'Partners',
            PAYMENTMETHODS: 'PaymentMethods',
            CLUBBENEFITS: 'ClubBenefits',
            DIVIDERLINE: 'DividerLine',
            BENEFITBLOCKS: 'BenefitBlocks',
            REGISTRATIONBLOCK: 'RegistrationBlock',
            BLOGARTICLE: 'BlogArticle',
            MINIBOXES: 'MiniBoxes',
            RECIPERESERVATION: 'RecipeReservation',
        };
    }
    /***/
    ComponentsService.prototype.getAllowedTypes = function () {
        var _this = this;
        var res = Object.keys(this.Types).map(function (key) {
            return _this.Types[key];
        });
        return res;
    };
    /***/
    ComponentsService.prototype.getComponent = function (type) {
        switch (type) {
            case this.Types.HEADER:
                return components_1.Header;
            case this.Types.HERO:
                return components_1.Hero;
            case this.Types.FOOTER:
                return components_1.Footer;
            case this.Types.REVIEWS:
                return components_1.Reviews;
            case this.Types.TEXTBLOCK:
                return components_1.TextBlock;
            case this.Types.MAP:
                return Map;
            case this.Types.INFOBOXES:
                return components_1.InfoBoxes;
            case this.Types.INFORECTANGLES:
                return components_1.InfoRectangles;
            case this.Types.BLOG:
                return components_1.Blog;
            case this.Types.DESCRIPTIONLIST:
                return components_1.DescriptionList;
            case this.Types.PHARMACIES:
                return components_1.Pharmacies;
            case this.Types.MENUBLOCKS:
                return components_1.MenuBlocks;
            case this.Types.PROMOTIONPREVIEWS:
                return components_1.PromotionPreviews;
            case this.Types.CAROUSEL:
                return components_1.Carousel;
            case this.Types.HEADLINE:
                return components_1.Headline;
            case this.Types.CUSTOMINFOBOXES:
                return components_1.CustomInfoBoxes;
            case this.Types.PHARMACIEINFO:
                return components_1.PharmacieInfo;
            case this.Types.GALLERY:
                return components_1.Gallery;
            case this.Types.DISCOUNTOFFER:
                return components_1.DiscountOffer;
            case this.Types.PROMOTIONSANDDISCOUNTS:
                return components_1.PromotionsAndDiscounts;
            case this.Types.PARTNERS:
                return components_1.Partners;
            case this.Types.PAYMENTMETHODS:
                return components_1.PaymentMethods;
            case this.Types.CLUBBENEFITS:
                return components_1.ClubBenefits;
            case this.Types.DIVIDERLINE:
                return components_1.DividerLine;
            case this.Types.BENEFITBLOCKS:
                return components_1.BenefitBlocks;
            case this.Types.REGISTRATIONBLOCK:
                return components_1.RegistrationBlock;
            case this.Types.BLOGARTICLE:
                return components_1.BlogArticle;
            case this.Types.MINIBOXES:
                return components_1.MiniBoxes;
            case this.Types.PHARMACIESLIST:
                return components_1.PharmaciesList;
            case this.Types.RECIPERESERVATION:
                return components_1.RecipeReservation;
            default:
                return function () { return React.createElement(components_1.AlertNotFound, { type: "component" }); };
        }
    };
    /***/
    ComponentsService.prototype.getComponentResource = function (type) {
        var res = resources.default;
        var typedRes = resources[type.toLowerCase()];
        if (lodash_1.isObjectLike(typedRes)) {
            res = __assign({}, res, typedRes);
        }
        return res;
    };
    ComponentsService.prototype.getForm = function (type) {
        switch (type) {
            default:
                return function () { return React.createElement(components_1.AlertNotFound, { type: "form" }); };
        }
    };
    return ComponentsService;
}());
exports.default = ComponentsService;
//# sourceMappingURL=index.js.map