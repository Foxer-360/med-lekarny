var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import getImageUrl from '@source/helpers/getImageUrl';
var InfoRectangles = function (props) {
    var infoRectangles = props.data.infoRectangles;
    return (React.createElement(List, { data: infoRectangles }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: 'info-rectangles' },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: 'info-rectangles__divider' }),
                React.createElement("div", { className: 'info-rectangles__list grid' }, data && data.map(function (rectangle, i) {
                    return (React.createElement(Link, __assign({ key: i, className: 'info-rectangles__list__item', style: { backgroundImage: rectangle.image && "url(" + getImageUrl(rectangle.image) + ")" } }, rectangle.url),
                        React.createElement("div", { className: 'info-rectangles__list__item__content' },
                            rectangle.icon && React.createElement(Media, { type: 'image', data: rectangle.icon }),
                            rectangle.title &&
                                React.createElement("p", { style: rectangle.titleColor && { color: "" + rectangle.titleColor } || {} }, rectangle.title)),
                        rectangle.gradientColor && (React.createElement("div", { className: 'info-rectangles__list__item--colorGradient', style: {
                                background: "linear-gradient(to left, rgba(125, 185, 232, 0) 0%, \n                          " + rectangle.gradientColor + " 100%)",
                                opacity: rectangle.opacity && rectangle.opacity
                            } }))));
                })))));
    }));
};
export default InfoRectangles;
//# sourceMappingURL=InfoRectangles.js.map