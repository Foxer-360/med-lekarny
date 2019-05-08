"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactResponsive = _interopRequireDefault(require("react-responsive"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _Slider = _interopRequireDefault(require("../../../lib/partials/Slider"));

var _splitArray = _interopRequireDefault(require("../../../lib/helpers/splitArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

var Mobile = function Mobile(props) {
  return React.createElement(_reactResponsive["default"], __assign({}, props, {
    minWidth: 0,
    maxWidth: 768
  }));
};

var Tablet = function Tablet(props) {
  return React.createElement(_reactResponsive["default"], __assign({}, props, {
    minWidth: 769,
    maxWidth: 1249
  }));
};

var Default = function Default(props) {
  return React.createElement(_reactResponsive["default"], __assign({}, props, {
    minWidth: 1250
  }));
};

var PromotionPreviews = function PromotionPreviews(props) {
  return React.createElement(_List["default"], {
    data: props.data.promotionPreviews || []
  }, function (_a) {
    var promotionPreviews = _a.data;
    var arrayOfSlides = promotionPreviews && promotionPreviews.map(function (slide, i) {
      return React.createElement("div", {
        key: i,
        className: 'promotion-previews__list__item grid'
      }, React.createElement("div", {
        className: 'promotion-previews__list__item__left'
      }, React.createElement("p", {
        className: 'promotion-previews__list__item__left__date'
      }, slide.date)), React.createElement("div", {
        className: 'promotion-previews__list__item__right'
      }, React.createElement("div", {
        className: 'promotion-previews__list__item__right__wrapper'
      }, React.createElement("p", {
        className: 'promotion-previews__list__item__right__title'
      }, slide.title), React.createElement("p", {
        className: 'promotion-previews__list__item__right__description'
      }, slide.description), React.createElement(_Link["default"], __assign({}, slide.url, {
        className: 'promotion-previews__list__item__right__url'
      }), slide.titleUrl))));
    }) || [];
    var arrayOfDesktopSlides = [];
    var arrayOfTabletSlides = [];
    var arrayOfMobiletSlides = [];
    arrayOfDesktopSlides = (0, _splitArray["default"])(arrayOfSlides, 3, 'promotion-previews__list');
    arrayOfTabletSlides = (0, _splitArray["default"])(arrayOfSlides, 2, 'promotion-previews__list');
    arrayOfMobiletSlides = (0, _splitArray["default"])(arrayOfSlides, 1, 'promotion-previews__list');
    return React.createElement("div", {
      className: 'promotions'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement(Default, null, React.createElement(_Slider["default"], {
      delay: 7000,
      showDots: false,
      showArrows: false,
      slides: arrayOfDesktopSlides,
      autoplay: arrayOfSlides.length > 3 ? true : false
    })), React.createElement(Tablet, null, React.createElement(_Slider["default"], {
      showArrows: false,
      delay: 7000,
      showDots: false,
      slides: arrayOfTabletSlides,
      autoplay: arrayOfSlides.length > 2 ? true : false
    })), React.createElement(Mobile, null, React.createElement(_Slider["default"], {
      delay: 7000,
      showDots: false,
      showArrows: false,
      slides: arrayOfMobiletSlides,
      autoplay: arrayOfSlides.length > 1 ? true : false
    }))));
  });
};

var _default = PromotionPreviews;
exports["default"] = _default;