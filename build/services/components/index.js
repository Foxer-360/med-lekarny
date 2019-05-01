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
import { isObjectLike } from 'lodash';
import { AlertNotFound, Hero, Blog, Header, Footer, Reviews, Gallery, Carousel, Partners, Headline, MiniBoxes, InfoBoxes, TextBlock, Pharmacies, MenuBlocks, DividerLine, ClubBenefits, BenefitBlocks, PharmacieInfo, DiscountOffer, PaymentMethods, PharmaciesList, InfoRectangles, DescriptionList, CustomInfoBoxes, RegistrationBlock, PromotionPreviews, BlogArticle, PromotionsAndDiscounts, } from '../../components';
import * as resources from './resources';
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
                return Header;
            case this.Types.HERO:
                return Hero;
            case this.Types.FOOTER:
                return Footer;
            case this.Types.REVIEWS:
                return Reviews;
            case this.Types.TEXTBLOCK:
                return TextBlock;
            case this.Types.MAP:
                return Map;
            case this.Types.INFOBOXES:
                return InfoBoxes;
            case this.Types.INFORECTANGLES:
                return InfoRectangles;
            case this.Types.BLOG:
                return Blog;
            case this.Types.DESCRIPTIONLIST:
                return DescriptionList;
            case this.Types.PHARMACIES:
                return Pharmacies;
            case this.Types.MENUBLOCKS:
                return MenuBlocks;
            case this.Types.PROMOTIONPREVIEWS:
                return PromotionPreviews;
            case this.Types.CAROUSEL:
                return Carousel;
            case this.Types.HEADLINE:
                return Headline;
            case this.Types.CUSTOMINFOBOXES:
                return CustomInfoBoxes;
            case this.Types.PHARMACIEINFO:
                return PharmacieInfo;
            case this.Types.GALLERY:
                return Gallery;
            case this.Types.DISCOUNTOFFER:
                return DiscountOffer;
            case this.Types.PROMOTIONSANDDISCOUNTS:
                return PromotionsAndDiscounts;
            case this.Types.PARTNERS:
                return Partners;
            case this.Types.PAYMENTMETHODS:
                return PaymentMethods;
            case this.Types.CLUBBENEFITS:
                return ClubBenefits;
            case this.Types.DIVIDERLINE:
                return DividerLine;
            case this.Types.BENEFITBLOCKS:
                return BenefitBlocks;
            case this.Types.REGISTRATIONBLOCK:
                return RegistrationBlock;
            case this.Types.BLOGARTICLE:
                return BlogArticle;
            case this.Types.MINIBOXES:
                return MiniBoxes;
            case this.Types.PHARMACIESLIST:
                return PharmaciesList;
            default:
                return function () { return React.createElement(AlertNotFound, { type: "component" }); };
        }
    };
    /***/
    ComponentsService.prototype.getComponentResource = function (type) {
        var res = resources.default;
        var typedRes = resources[type.toLowerCase()];
        if (isObjectLike(typedRes)) {
            res = __assign({}, res, typedRes);
        }
        return res;
    };
    ComponentsService.prototype.getForm = function (type) {
        switch (type) {
            default:
                return function () { return React.createElement(AlertNotFound, { type: "form" }); };
        }
    };
    return ComponentsService;
}());
export default ComponentsService;
//# sourceMappingURL=index.js.map