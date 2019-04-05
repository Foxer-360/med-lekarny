"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

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

var PharmacieInfo = function PharmacieInfo(props) {
  var _a = props.data,
      geo = _a.geo,
      geoUrl = _a.geoUrl,
      phone = _a.phone,
      transport = _a.transport,
      transportImage = _a.transportImage,
      officeHours = _a.officeHours;
  return React.createElement("div", {
    className: 'pharmacie-info'
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'pharmacie-info__top-divider'
  }), React.createElement("div", {
    className: 'pharmacie-info__content'
  }, React.createElement("div", {
    className: 'pharmacie-info__content__item'
  }, React.createElement("img", {
    src: '/assets/mediconLekarny/images/phoneIcon.svg',
    alt: "phone nubmer"
  }), phone && React.createElement("a", {
    href: "tel:" + phone
  }, phone)), React.createElement("div", {
    className: 'pharmacie-info__content__item'
  }, React.createElement("img", {
    src: '/assets/mediconLekarny/images/geoIcon.svg',
    alt: "address"
  }), React.createElement(_Link.default, __assign({}, geoUrl), geo)), React.createElement("div", {
    className: 'pharmacie-info__content__item'
  }, React.createElement("img", {
    src: '/assets/mediconLekarny/images/officeHours.svg',
    alt: "office hours"
  }), React.createElement("p", null, officeHours)), React.createElement("div", {
    className: 'pharmacie-info__content__item'
  }, transportImage && React.createElement(_Media.default, {
    type: 'image',
    data: transportImage
  }) || React.createElement("img", {
    src: '/assets/mediconLekarny/images/metro.svg',
    alt: "metro"
  }), React.createElement("p", null, transport))), React.createElement("div", {
    className: 'pharmacie-info__bottom-divider'
  })));
};

var _default = PharmacieInfo;
exports.default = _default;