"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactResponsive = _interopRequireDefault(require("react-responsive"));

var _List = _interopRequireDefault(require("../List"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _Slider = _interopRequireDefault(require("../../../lib/partials/Slider"));

var _splitArray = _interopRequireDefault(require("../../../lib/helpers/splitArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Mobile = function Mobile(props) {
  return React.createElement(_reactResponsive.default, __assign({}, props, {
    maxWidth: 576
  }));
};

var Tablet = function Tablet(props) {
  return React.createElement(_reactResponsive.default, __assign({}, props, {
    minWidth: 577,
    maxWidth: 991
  }));
};

var Default = function Default(props) {
  return React.createElement(_reactResponsive.default, __assign({}, props, {
    minWidth: 992
  }));
};

var Gallery = function Gallery(props) {
  return React.createElement(_List.default, {
    data: props.data.slides || []
  }, function (_a) {
    var slides = _a.data;
    var arrayOfSlides = slides && slides.map(function (slide, i) {
      return React.createElement("div", {
        className: 'gallery__list__item',
        key: i
      }, slide.image && React.createElement(_Media.default, {
        type: 'image',
        data: slide.image
      }));
    }) || [];
    var arrayOfDesktopSlides = [];
    var arrayOfTabletSlides = [];
    var arrayOfMobiletSlides = [];
    arrayOfDesktopSlides = (0, _splitArray.default)(arrayOfSlides, 4, 'gallery__list');
    arrayOfTabletSlides = (0, _splitArray.default)(arrayOfSlides, 2, 'gallery__list');
    arrayOfMobiletSlides = (0, _splitArray.default)(arrayOfSlides, 1, 'gallery__list');
    return React.createElement("div", {
      className: 'gallery'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement(Default, null, React.createElement(_Slider.default, {
      delay: 7000,
      showDots: false,
      slides: arrayOfDesktopSlides,
      autoplay: arrayOfSlides.length > 4 ? true : false,
      showArrows: arrayOfSlides.length > 4 ? true : false
    })), React.createElement(Tablet, null, React.createElement(_Slider.default, {
      delay: 7000,
      showDots: false,
      slides: arrayOfTabletSlides,
      autoplay: arrayOfSlides.length > 2 ? true : false,
      showArrows: arrayOfSlides.length > 2 ? true : false
    })), React.createElement(Mobile, null, React.createElement(_Slider.default, {
      delay: 7000,
      showDots: false,
      slides: arrayOfMobiletSlides,
      autoplay: arrayOfSlides.length > 1 ? true : false,
      showArrows: arrayOfSlides.length > 1 ? true : false
    }))));
  });
};

var _default = Gallery;
exports.default = _default;