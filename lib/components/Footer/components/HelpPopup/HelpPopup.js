"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactApollo = require("react-apollo");

var _reactAdopt = require("react-adopt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

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

var GET_CONTEXT = (0, _graphqlTag.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    languageData @client\n  }\n"], ["\n  {\n    languageData @client\n  }\n"])));
var ComposedQuery = (0, _reactAdopt.adopt)({
  getContext: function getContext(_a) {
    var render = _a.render;
    return React.createElement(_reactApollo.Query, {
      query: GET_CONTEXT
    }, function (_a) {
      var data = _a.data;
      return render(data);
    });
  }
});

var HelpPopup =
/** @class */
function (_super) {
  __extends(HelpPopup, _super);

  function HelpPopup(props) {
    var _this = _super.call(this, props) || this;

    _this.toggleList = function () {
      _this.setState({
        active: !_this.state.active
      });
    };

    _this.state = {
      active: false
    };
    return _this;
  }

  HelpPopup.prototype.render = function () {
    var _this = this;

    return React.createElement(ComposedQuery, null, function (_a) {
      var languageData = _a.getContext.languageData;
      return React.createElement("div", {
        className: "helpPopup " + (_this.state.active ? 'helpPopup--active' : '') + " "
      }, React.createElement("div", {
        className: 'helpPopup__main',
        style: {
          backgroundImage: 'url(/assets/mediconLekarny/images/phoneIcon.svg)'
        },
        onClick: function onClick() {
          return _this.toggleList();
        }
      }, React.createElement("h4", null, languageData.code === 'cs' ? 'Potřebujete poradit?' : 'Треба вам помоћ?')), React.createElement("ul", {
        className: 'helpPopup__list'
      }, React.createElement("li", {
        style: {
          backgroundImage: 'url(/assets/mediconLekarny/images/phoneIcon.svg)'
        }
      }, React.createElement("p", null, "Pharmacentrum Bud\u011Bjovick\xE1"), React.createElement("a", {
        href: "tel:+420261006330"
      }, "+420 261 006 330")), React.createElement("li", {
        style: {
          backgroundImage: 'url(/assets/mediconLekarny/images/phoneIcon.svg)'
        }
      }, React.createElement("p", null, "Pharmacentrum DBK"), React.createElement("a", {
        href: "tel:+420296825318"
      }, "+420 296\xA0825\xA0318")), React.createElement("li", {
        style: {
          backgroundImage: 'url(/assets/mediconLekarny/images/phoneIcon.svg)'
        }
      }, React.createElement("p", null, "Pharmacentrum Vyso\u010Dany"), React.createElement("a", {
        href: "tel:+420266006324"
      }, "+420 266\xA0006\xA0324")), React.createElement("li", {
        style: {
          backgroundImage: 'url(/assets/mediconLekarny/images/phoneIcon.svg)'
        }
      }, React.createElement("p", null, "Pharmacentrum Hole\u0161ovice"), React.createElement("a", {
        href: "tel:+420227777699"
      }, "+420 227 777 699"))));
    });
  };

  return HelpPopup;
}(React.Component);

var _default = HelpPopup;
exports.default = _default;
var templateObject_1;