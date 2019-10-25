"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getImgUrl(data) {
    var baseUrl = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
    if (data && data.filename) {
        return baseUrl + data.category + data.hash + '_' + data.filename;
    }
    return null;
}
exports.default = getImgUrl;
//# sourceMappingURL=getImgUrl.js.map