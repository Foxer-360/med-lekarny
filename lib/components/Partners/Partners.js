"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _List = _interopRequireDefault(require("../List"));

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

var Partners = function Partners(props) {
  var _a = props.data,
      title = _a.title,
      partners = _a.partners;
  return React.createElement(_List.default, {
    data: partners
  }, function (_a) {
    var data = _a.data;
    return React.createElement("div", {
      className: 'partners'
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: 'partners__divider'
    }), title && React.createElement("h3", null, title), React.createElement("div", {
      className: 'partners__list grid'
    }, data && data.map(function (partner, i) {
      return React.createElement(_Link.default, __assign({
        key: i
      }, partner.url), partner.image && React.createElement(_Media.default, {
        type: 'image',
        data: partner.image
      }));
    }))));
  });
};

var _default = Partners;
exports.default = _default;