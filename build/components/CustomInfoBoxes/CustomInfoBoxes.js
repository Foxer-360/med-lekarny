import * as React from 'react';
import InfoElement from './components/InfoElement';
var CustomInfoBoxes = function (props) {
    var _a = props.data, title = _a.title, boxes = _a.boxes;
    return (React.createElement("section", { className: 'custom-info-boxes' },
        title && title.length > 1 && React.createElement("h3", null, title),
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'custom-info-boxes__list grid' }, boxes && boxes.map(function (box, i) { return (React.createElement(InfoElement, { link: box.link, gradientColor: box.gradientColor, title: box.title, image: box.image, button: box.button, titleColor: box.titleColor, key: i })); })))));
};
export default CustomInfoBoxes;
//# sourceMappingURL=CustomInfoBoxes.js.map