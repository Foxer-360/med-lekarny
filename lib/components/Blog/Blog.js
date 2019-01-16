"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMasonryCss = _interopRequireDefault(require("react-masonry-css"));

var _blogCard = require("./components/blogCard");

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _SearchBar = _interopRequireDefault(require("../SearchBar/SearchBar"));

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

var data = {
  items: [{
    title: 'Těhotenství',
    text: 'Epilepsie při vhodné léčbě těhotenství nebrání',
    img: '/assets/medicon/images/blog.png',
    color: '#386fa2'
  }, {
    title: 'Hledáme',
    text: 'Pro věrné zákazníky našich lékáren máme věrnostní program',
    img: '/assets/medicon/images/blog.png',
    color: '#d09d56',
    special: true
  }, {
    title: 'Věrnostní karta',
    text: 'Pro věrné zákazníky našich lékáren máme věrnostní program',
    img: '/assets/medicon/images/blog.png',
    color: '#d09d56'
  }, {
    title: 'MAMMACENTRA',
    text: 'V našich čtyřech MAMMACENTRECH zdravotnický personál každý rok vyšetří na 50 000 žen.',
    img: '/assets/medicon/images/blog.png',
    color: '#4c959f'
  }, {
    title: 'Home care',
    text: 'Pomáháme při domácí pěči',
    img: '/assets/medicon/images/blog.png',
    color: '#d3969f'
  }, {
    title: 'in care',
    text: 'Nadstandartní zdravotní péče pro firmy i jednotlivce',
    img: '/assets/medicon/images/blog.png',
    color: '#386fa2'
  }]
};

var Blog =
/** @class */
function (_super) {
  __extends(Blog, _super);

  function Blog(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    return _this;
  }

  Blog.prototype.render = function () {
    var _a = this.props.data,
        title = _a.title,
        displaySearch = _a.displaySearch;
    return React.createElement("section", {
      className: 'blog'
    }, React.createElement("div", {
      className: "container"
    }, title && React.createElement("h1", null, title), displaySearch && React.createElement(_SearchBar.default, {
      placeholder: 'Vyhledat téma',
      barColor: 'gray'
    }), React.createElement(_reactMasonryCss.default, {
      breakpointCols: {
        default: 3,
        4000: 3,
        800: 2,
        500: 1
      },
      className: "my-masonry-grid",
      columnClassName: "my-masonry-grid_column"
    }, data.items.map(function (item, index) {
      return React.createElement(_blogCard.BlogCard, {
        title: item.title,
        text: item.text,
        key: index,
        color: item.color,
        img: item.img,
        special: item.special
      });
    })), React.createElement("div", {
      className: 'blog__blur'
    }, React.createElement("div", null)), React.createElement("div", {
      className: "blog__btnHolder"
    }, React.createElement(_Button.default, {
      classes: "btn--blueBkg btn--fullWidth"
    }, "Na\u010D\xEDst dal\u0161\xED"))));
  };

  return Blog;
}(React.Component);

var _default = Blog;
exports.default = _default;