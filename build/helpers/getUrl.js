"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUrl(data) {
    var baseUrl = 'http://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
    if (data && data.filename) {
        return baseUrl + data.category + data.hash + '_' + data.filename;
    }
    return null;
}
exports.default = getUrl;
//# sourceMappingURL=getUrl.js.map