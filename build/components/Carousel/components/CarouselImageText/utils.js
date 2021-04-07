"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = require("./const");
var BASE_URL = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
var getImageOriginalUrl = function (image) {
    if (!image) {
        return '';
    }
    var category = image.category, hash = image.hash, filename = image.filename;
    return BASE_URL + category + hash + '_' + filename;
};
exports.getBackgroundImageStyle = function (image, color) { return ({
    backgroundImage: "url(\"" + getImageOriginalUrl(image) + "\")",
    backgroundColor: color,
}); };
exports.getTextColor = function (isTextWhite) { return (isTextWhite ? { color: const_1.WHITE_COLOR } : {}); };
exports.shouldButtonRender = function (url, buttonTitle) { return (url && url.url && buttonTitle ? true : false); };
//# sourceMappingURL=utils.js.map