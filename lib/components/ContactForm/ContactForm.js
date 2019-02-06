"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

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

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var ContactForm =
/** @class */
function (_super) {
  __extends(ContactForm, _super);

  function ContactForm(props) {
    var _this = _super.call(this, props) || this;

    _this.changeInputValue = function (e) {
      var _a;

      _this.setState({
        formValues: __assign({}, _this.state.formValues, (_a = {}, _a[e.target.name] = e.target.value, _a))
      });
    };

    _this.state = {
      formValues: {
        name: '',
        email: '',
        message: ''
      }
    };
    return _this;
  }

  ContactForm.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        gdprLink = _a.gdprLink,
        title = _a.title;
    return React.createElement("div", {
      className: 'fullWidthContainer'
    }, React.createElement("section", {
      className: 'contactForm form'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement("h3", {
      className: 'gradientHeading'
    }, title), React.createElement("form", null, React.createElement("div", {
      className: 'form__row form__row--first'
    }, React.createElement("div", null, React.createElement("div", {
      className: 'form__input active'
    }, React.createElement("input", {
      type: "text",
      name: "name",
      className: this.state.formValues.name ? 'active' : '',
      onChange: function onChange(e) {
        return _this.changeInputValue(e);
      }
    }), React.createElement("span", {
      className: 'form__input__label'
    }, "Jm\xE9no"), React.createElement("div", {
      className: 'form__input__bar'
    }))), React.createElement("div", null, React.createElement("div", {
      className: 'form__input'
    }, React.createElement("input", {
      type: "email",
      name: "email",
      className: this.state.formValues.email ? 'active' : '',
      onChange: function onChange(e) {
        return _this.changeInputValue(e);
      }
    }), React.createElement("span", {
      className: 'form__input__label'
    }, "E-mail"), React.createElement("div", {
      className: 'form__input__bar'
    })))), React.createElement("div", {
      className: 'form__textarea'
    }, React.createElement("label", null, "Zpr\xE1va"), React.createElement("textarea", {
      name: "message",
      onChange: function onChange(e) {
        return _this.changeInputValue(e);
      }
    })), React.createElement("div", {
      className: 'form__terms'
    }, React.createElement("div", null, React.createElement("input", {
      className: 'checkbox',
      id: "styled-checkbox-1",
      type: "checkbox"
    }), React.createElement("label", {
      htmlFor: "styled-checkbox-1"
    })), React.createElement("div", null, "Souhlas\xEDm se ", React.createElement("a", {
      href: gdprLink
    }, "zpracov\xE1n\xEDm osobn\xEDch"), " \xFAdaj\u016F.")), React.createElement("div", {
      className: 'flexRow flexAlign--center'
    }, React.createElement(_Button.default, {
      classes: "btn--greenBkg"
    }, "Odeslat"))))));
  };

  return ContactForm;
}(React.Component);

var _default = ContactForm;
exports.default = _default;