"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

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

var PromotionsAndDiscounts = function PromotionsAndDiscounts(props) {
  return React.createElement(_List["default"], {
    data: props.data.items || []
  }, function (_a) {
    var items = _a.data;
    var arrayOfSlides = items && items.map(function (slide, i) {
      return React.createElement("div", {
        key: i
      }, React.createElement(_Link["default"], __assign({}, slide.url), slide.image && React.createElement(_Media["default"], {
        type: 'image',
        data: slide.image
      })));
    }) || [];
    var settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      pauseOnHover: true,
      arrows: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }]
    };
    return React.createElement("div", {
      className: 'prom-and-disc'
    }, React.createElement("div", {
      className: "container"
    }, props.data.title && React.createElement("h3", null, props.data.title) || React.createElement("div", {
      style: {
        height: 50
      }
    }), React.createElement(_reactSlick["default"], __assign({}, settings), arrayOfSlides)));
  });
};

var _default = PromotionsAndDiscounts;
exports["default"] = _default;