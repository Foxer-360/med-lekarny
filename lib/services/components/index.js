"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _components = require("../../components");

var resources = _interopRequireWildcard(require("./resources"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

/**
 *
 */
var ComponentsService =
/** @class */
function () {
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
      MINIBOXES: 'MiniBoxes'
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
        return _components.Header;

      case this.Types.HERO:
        return _components.Hero;

      case this.Types.FOOTER:
        return _components.Footer;

      case this.Types.REVIEWS:
        return _components.Reviews;

      case this.Types.TEXTBLOCK:
        return _components.TextBlock;

      case this.Types.MAP:
        return Map;

      case this.Types.INFOBOXES:
        return _components.InfoBoxes;

      case this.Types.INFORECTANGLES:
        return _components.InfoRectangles;

      case this.Types.BLOG:
        return _components.Blog;

      case this.Types.DESCRIPTIONLIST:
        return _components.DescriptionList;

      case this.Types.PHARMACIES:
        return _components.Pharmacies;

      case this.Types.MENUBLOCKS:
        return _components.MenuBlocks;

      case this.Types.PROMOTIONPREVIEWS:
        return _components.PromotionPreviews;

      case this.Types.CAROUSEL:
        return _components.Carousel;

      case this.Types.HEADLINE:
        return _components.Headline;

      case this.Types.CUSTOMINFOBOXES:
        return _components.CustomInfoBoxes;

      case this.Types.PHARMACIEINFO:
        return _components.PharmacieInfo;

      case this.Types.GALLERY:
        return _components.Gallery;

      case this.Types.DISCOUNTOFFER:
        return _components.DiscountOffer;

      case this.Types.PROMOTIONSANDDISCOUNTS:
        return _components.PromotionsAndDiscounts;

      case this.Types.PARTNERS:
        return _components.Partners;

      case this.Types.PAYMENTMETHODS:
        return _components.PaymentMethods;

      case this.Types.CLUBBENEFITS:
        return _components.ClubBenefits;

      case this.Types.DIVIDERLINE:
        return _components.DividerLine;

      case this.Types.BENEFITBLOCKS:
        return _components.BenefitBlocks;

      case this.Types.REGISTRATIONBLOCK:
        return _components.RegistrationBlock;

      case this.Types.BLOGARTICLE:
        return _components.BlogArticle;

      case this.Types.MINIBOXES:
        return _components.MiniBoxes;

      case this.Types.PHARMACIESLIST:
        return _components.PharmaciesList;

      default:
        return function () {
          return React.createElement(_components.AlertNotFound, {
            type: "component"
          });
        };
    }
  };
  /***/


  ComponentsService.prototype.getComponentResource = function (type) {
    var res = resources.default;
    var typedRes = resources[type.toLowerCase()];

    if ((0, _lodash.isObjectLike)(typedRes)) {
      res = __assign({}, res, typedRes);
    }

    return res;
  };

  ComponentsService.prototype.getForm = function (type) {
    switch (type) {
      default:
        return function () {
          return React.createElement(_components.AlertNotFound, {
            type: "form"
          });
        };
    }
  };

  return ComponentsService;
}();

var _default = ComponentsService;
exports.default = _default;