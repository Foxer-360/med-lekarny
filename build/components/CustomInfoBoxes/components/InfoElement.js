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
import Link from '@source/partials/Link';
import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';
export default function InfoElement(props) {
    var title = props.title, gradientColor = props.gradientColor, image = props.image, button = props.button, titleColor = props.titleColor, link = props.link;
    return (React.createElement(Link, __assign({}, link, { className: 'custom-info-boxes__list__element', style: { backgroundImage: image && "url(" + getImageUrl(image) + ")" } }),
        React.createElement("div", { className: 'fullWidthContainer custom-info-boxes__list__element__content' },
            titleColor && title && React.createElement("h5", { style: { color: "" + titleColor } }, title),
            button && React.createElement(Button, { classes: 'btn--fullWidth ' + button }, "vice info")),
        gradientColor && (React.createElement("div", { className: 'custom-info-boxes__list__element--colorGradient', style: { background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, " + gradientColor + " 100%)" } }))));
}
//# sourceMappingURL=InfoElement.js.map