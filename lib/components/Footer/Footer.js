"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Social = _interopRequireDefault(require("./components/Social"));

var _HelpPopup = _interopRequireDefault(require("./components/HelpPopup"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Footer =
/** @class */
function (_super) {
  __extends(Footer, _super);

  function Footer(props) {
    return _super.call(this, props) || this;
  }

  Footer.prototype.render = function () {
    var _a = this.props.data,
        links = _a.links,
        icons = _a.icons,
        copyrights = _a.copyrights,
        gdprText = _a.gdprText,
        gdprUrl = _a.gdprUrl;
    return React.createElement("footer", null, React.createElement(_HelpPopup.default, null), React.createElement("div", {
      className: 'footer'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement("div", null, React.createElement("ul", {
      className: 'footer__list'
    }, links && links.map(function (link, i) {
      return React.createElement("li", null, React.createElement(_Link.default, {
        key: i,
        url: link.url && link.url
      }, link.title && link.title));
    })), React.createElement(_Social.default, {
      icons: icons
    }))), React.createElement("div", {
      className: 'footer__left'
    }), React.createElement("div", {
      className: 'footer__right'
    })), React.createElement("div", {
      className: "bottom"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "bottom__copyrights grid"
    }, React.createElement("p", null, copyrights && copyrights), React.createElement(_Link.default, {
      url: gdprUrl && gdprUrl
    }, gdprText && gdprText)))));
  };

  return Footer;
}(React.Component);

var _default = Footer;
exports.default = _default;