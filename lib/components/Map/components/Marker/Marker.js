"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Marker = function Marker(props) {
  var type = props.type,
      active = props.active,
      handleMarkerClick = props.handleMarkerClick,
      index = props.index;
  return React.createElement("div", {
    className: 'markerHolder'
  }, type !== 'geoLocation' && React.createElement("div", {
    className: "marker " + type,
    onClick: function onClick(e) {
      return handleMarkerClick(e, index);
    }
  }), type === 'geoLocation' && React.createElement("div", {
    className: 'geoLocationMarker'
  }));
};

var _default = Marker;
exports.default = _default;