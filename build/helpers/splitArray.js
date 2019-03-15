import React from 'react';
var splitArray = function (array, size, classes) {
    var result = [];
    for (var i = 0; i < Math.ceil(array.length / size); i++) {
        result[i] = (React.createElement("div", { className: classes }, array.slice((i * size), (i * size) + size)));
    }
    return result;
};
export default splitArray;
//# sourceMappingURL=splitArray.js.map