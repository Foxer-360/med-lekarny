"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Highlight = function Highlight(props) {
  var _a = props.data,
      text = _a.text,
      url = _a.url;
  return React.createElement("div", {
    className: "fullWidthContainer"
  }, React.createElement("section", {
    className: 'highlight'
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "flexRow flexAlign--center"
  }, React.createElement("div", {
    className: 'highlight__info flexRow'
  }, React.createElement("img", {
    src: "/assets/mediconLekarny/images/info.png",
    alt: "info"
  }), text && React.createElement("p", null, text)), React.createElement(_Button.default, {
    classes: "btn--whiteBorder btn--fullWidth"
  }, "vice info")))));
};

var _default = Highlight;
exports.default = _default;