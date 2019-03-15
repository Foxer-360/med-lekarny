"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var splitArray = function splitArray(array, size, classes) {
  var result = [];

  for (var i = 0; i < Math.ceil(array.length / size); i++) {
    result[i] = _react.default.createElement("div", {
      className: classes
    }, array.slice(i * size, i * size + size));
  }

  return result;
};

var _default = splitArray;
exports.default = _default;