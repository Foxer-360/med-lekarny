var getImgUrl = function (data) {
    var baseUrl = 'http://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
    if (data) {
        return baseUrl + data.category + data.hash + '_' + data.filename;
    }
    return null;
};
export default getImgUrl;
//# sourceMappingURL=getImageUrl.js.map