var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import Masonry from 'react-masonry-css';
import List from '../List';
import { BlogCard } from './components/blogCard';
import SearchBar from '../SearchBar/SearchBar';
var Blog = /** @class */ (function (_super) {
    __extends(Blog, _super);
    function Blog(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            numberOfPage: 1
        };
        return _this;
    }
    Blog.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, displaySearch = _a.displaySearch, blogItems = _a.blogItems;
        return (React.createElement(List, { data: blogItems }, function (_a) {
            var getPage = _a.getPage;
            var _b = getPage(_this.state.numberOfPage, 'infinite', 6), items = _b.items, lastPage = _b.lastPage;
            return (React.createElement("section", { className: 'blog' },
                React.createElement("div", { className: "container" },
                    title && React.createElement("h1", { style: displaySearch ? { paddingBottom: 0 } : {} }, title),
                    displaySearch && React.createElement(SearchBar, { placeholder: 'Vyhledat téma', barColor: 'gray' }),
                    React.createElement(Masonry, { breakpointCols: { default: 3, 4000: 3, 800: 2, 500: 1 }, className: "my-masonry-grid", columnClassName: "my-masonry-grid_column" }, items && items.map(function (item, i) { return (React.createElement(BlogCard, { key: i, img: item.img, title: item.title, text: item.text, color: item.color, textColor: item.textColor, special: item.special && item.special })); })),
                    React.createElement("div", { className: 'blog__blur' },
                        React.createElement("div", null)),
                    _this.state.numberOfPage < lastPage &&
                        React.createElement("div", { className: "blog__btnHolder" },
                            React.createElement("button", { className: "btn btn--greenBkg btn--fullWidth", onClick: function () { return _this.setState({ numberOfPage: _this.state.numberOfPage + 1 }); } }, "Na\u010D\u00EDst dal\u0161\u00ED")))));
        }));
    };
    return Blog;
}(React.Component));
export default Blog;
//# sourceMappingURL=Blog.js.map