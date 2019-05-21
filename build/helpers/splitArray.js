"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var splitArray = function (array, size, classes) {
    var result = [];
    for (var i = 0; i < Math.ceil(array.length / size); i++) {
        result[i] = (React.createElement("div", { className: classes, key: i }, array.slice((i * size), (i * size) + size)));
    }
    return result;
};
exports.default = splitArray;
//# sourceMappingURL=splitArray.js.map