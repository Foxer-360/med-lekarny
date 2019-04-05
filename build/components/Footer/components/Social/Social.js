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
import SvgIcon from '@source/partials/SvgIcon';
import Link from '@source/partials/Link';
var Social = function (props) {
    var icons = props.icons;
    return (React.createElement("div", { className: 'social' }, icons && icons.map(function (icon, i) { return (React.createElement(Link, __assign({ key: i }, icon.url),
        React.createElement(SvgIcon, { type: 'white', name: icon.title && icon.title }))); })));
};
export default Social;
//# sourceMappingURL=Social.js.map