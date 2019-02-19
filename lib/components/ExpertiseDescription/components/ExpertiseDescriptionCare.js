"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ExpertiseDescriptionCare = function ExpertiseDescriptionCare(props) {
  var title = props.title,
      text = props.text;
  return React.createElement("div", {
    className: 'care'
  }, title && React.createElement("h3", null, title), React.createElement("div", {
    className: 'hCenterBlock'
  }, text && React.createElement(_reactMarkdown.default, {
    source: text
  })));
};

var _default = ExpertiseDescriptionCare;
exports.default = _default;