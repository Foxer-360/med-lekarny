import * as React from 'react';
import InfoElement from './components/InfoElement';
var InfoBoxes = function (props) {
    var boxes = props.data.boxes;
    return (React.createElement("section", { className: 'info-boxes' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'info-boxes__divider' }),
            React.createElement("div", { className: 'grid info-boxes__list' }, boxes && boxes.map(function (box, i) { return (React.createElement(InfoElement, { title: box.title, image: box.image, url: box.url, key: i })); })))));
};
export default InfoBoxes;
//# sourceMappingURL=InfoBoxes.js.map