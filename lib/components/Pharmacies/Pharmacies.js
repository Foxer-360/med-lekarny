"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

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

var Pharmacies = function Pharmacies(props) {
  var pharmacies = props.data.pharmacies;
  return React.createElement(_List.default, {
    data: pharmacies
  }, function (_a) {
    var data = _a.data;
    return React.createElement("section", {
      className: 'pharmacies'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement("div", {
      className: 'pharmacies__divider'
    }, React.createElement("div", null, React.createElement("img", {
      src: '/assets/mediconLekarny/images/pharmacies-divider-ad.png'
    })), React.createElement("div", null, React.createElement("img", {
      src: '/assets/mediconLekarny/images/pharmacies-divider.png'
    })), React.createElement("div", null, React.createElement("img", {
      src: '/assets/mediconLekarny/images/pharmacies-divider-ad.png'
    })), React.createElement("br", {
      style: {
        clear: 'both'
      }
    })), React.createElement("div", {
      className: 'pharmacies__list grid'
    }, data && data.map(function (pharmacie, i) {
      var text = pharmacie.text,
          image = pharmacie.image,
          title = pharmacie.title,
          address = pharmacie.address,
          addressUrl = pharmacie.addressUrl,
          pharmacieUrl = pharmacie.pharmacieUrl;
      return React.createElement("div", {
        key: i,
        className: 'pharmacies__list__item'
      }, image && React.createElement(_Link.default, __assign({}, pharmacieUrl), React.createElement(_Media.default, {
        type: 'image',
        data: image
      })), title && React.createElement(_reactMarkdown.default, {
        source: title
      }), React.createElement(_Link.default, __assign({}, addressUrl), address), text && React.createElement(_reactMarkdown.default, {
        source: text
      }));
    }))));
  });
};

var _default = Pharmacies;
exports.default = _default;