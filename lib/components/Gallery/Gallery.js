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
  var slides = props.data.slides;

  var splitArray = function splitArray(array, size) {
    var result = [];

    for (var i = 0; i < Math.ceil(array.length / size); i++) {
      result[i] = React.createElement("div", {
        className: 'gallery__list'
      }, array.slice(i * size, i * size + size));
    }

    return result;
  };

  var autoPlay = false;

  if (slides.length > 4) {
    autoPlay = true;
  }

  var arrayOfSlides = slides && slides.map(function (slide, i) {
    return React.createElement("div", {
      className: 'gallery__list__item',
      key: i
    }, slide.image && React.createElement(_Media.default, {
      type: 'image',
      data: slide.image
    }));
  });
  var arrayOfDesktopSlides = [];
  var arrayOfTabletSlides = [];
  var arrayOfMobiletSlides = [];

  if (slides.length > 4) {
    // Split an array of 4 elements
    arrayOfDesktopSlides = splitArray(arrayOfSlides, 4);
  }

  if (slides.length > 2) {
    arrayOfTabletSlides = splitArray(arrayOfSlides, 2);
  }

  if (slides.length > 1) {
    arrayOfMobiletSlides = splitArray(arrayOfSlides, 1);
  }

  return React.createElement(_List.default, {
    data: {}
  }, function (_a) {
    var data = _a.data;
    return React.createElement("div", {
      className: 'gallery'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement(Default, null, React.createElement(_Slider.default, {
      autoplay: autoPlay,
      showArrows: true,
      delay: 7000,
      showDots: false,
      slides: arrayOfDesktopSlides
    })), React.createElement(Tablet, null, React.createElement(_Slider.default, {
      autoplay: autoPlay,
      showArrows: true,
      delay: 7000,
      showDots: false,
      slides: arrayOfTabletSlides
    })), React.createElement(Mobile, null, React.createElement(_Slider.default, {
      autoplay: autoPlay,
      showArrows: true,
      delay: 7000,
      showDots: false,
      slides: arrayOfMobiletSlides
    }))));
  });
};

var _default = Gallery;
exports.default = _default;