"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _Button = _interopRequireDefault(require("../../../lib/partials/Button"));

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

var ClubBenefits = function ClubBenefits(props) {
  var _a = props.data,
      buttonTitle = _a.buttonTitle,
      buttonUrl = _a.buttonUrl,
      conditionsUrl = _a.conditionsUrl,
      benefits = _a.benefits;
  return React.createElement(_List.default, {
    data: benefits
  }, function (_a) {
    var data = _a.data;
    return React.createElement("div", {
      className: 'club-benefits'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement("div", {
      className: 'club-benefits__list grid'
    }, data && data.map(function (benefit, i) {
      return React.createElement("div", {
        key: i,
        className: 'club-benefits__list__item'
      }, benefit.title && React.createElement(_reactMarkdown.default, {
        source: benefit.title
      }));
    })), buttonTitle && React.createElement("div", {
      className: 'club-benefits__btn-holder'
    }, React.createElement(_Button.default, {
      url: buttonUrl,
      classes: 'btn--greenBkg hCenterBlock'
    }, buttonTitle)), conditionsUrl && React.createElement(_Link.default, __assign({}, conditionsUrl, {
      className: 'club-benefits__conditions'
    }), "V\u0161eobecn\xE9 obchodn\xED podm\xEDnky")));
  });
};

var _default = ClubBenefits;
exports.default = _default;