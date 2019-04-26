import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '@source/partials/Button';
import getFileUrl from '@source/helpers/getImageUrl';
var RegistrationBlock = function (props) {
    var _a = props.data, title = _a.title, text = _a.text, btnTitle = _a.btnTitle, btnUrl = _a.btnUrl, conditionsFile = _a.conditionsFile;
    return (React.createElement("div", { className: 'registration-block' },
        React.createElement("div", { className: "container" },
            title && React.createElement("h3", null, title),
            text && React.createElement(ReactMarkdown, { source: text }),
            btnTitle &&
                React.createElement("div", { className: 'registration-block__btn-holder' },
                    React.createElement(Button, { url: btnUrl, classes: 'btn--greenBkg hCenterBlock' }, btnTitle)),
            conditionsFile && conditionsFile.filename &&
                React.createElement("a", { download: true, target: '_blank', href: getFileUrl(conditionsFile), className: 'registration-block__conditions' }, "V\u0161eobecn\u00E9 obchodn\u00ED podm\u00EDnky"))));
};
export default RegistrationBlock;
//# sourceMappingURL=RegistrationBlock.js.map