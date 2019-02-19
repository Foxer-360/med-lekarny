"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _getImageUrl = _interopRequireDefault(require("../../../lib/helpers/getImageUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var jobOffers = function jobOffers(props) {
  var _a = props.data,
      title = _a.title,
      offers = _a.offers;
  return React.createElement("div", {
    className: 'container'
  }, React.createElement("section", {
    className: 'jobOffers'
  }, title && React.createElement("h3", null, title), React.createElement("div", {
    className: "grid offers"
  }, offers && offers.map(function (offer, index) {
    return React.createElement("a", {
      href: offer.url,
      key: index,
      className: 'flexRow offers__element'
    }, offer.image && React.createElement("div", {
      style: {
        backgroundImage: offer.image && "url(" + (0, _getImageUrl.default)(offer.image) + ")"
      }
    }, offer.title && React.createElement("p", {
      className: 'hCenterBlock'
    }, offer.title)));
  }))));
};

var _default = jobOffers;
exports.default = _default;