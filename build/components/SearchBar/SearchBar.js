"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SvgIcon_1 = require("@source/partials/SvgIcon");
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFocus = function () {
            _this.setState({
                focused: !_this.state.focused,
            });
        };
        _this.searchBar = React.createRef();
        _this.state = { focused: false };
        return _this;
    }
    SearchBar.prototype.render = function () {
        var _this = this;
        var _a = this.props, placeholder = _a.placeholder, barColor = _a.barColor, value = _a.value, onChange = _a.onChange;
        return (React.createElement("div", { className: "searchBar " + (this.state.focused ? 'searchBar--focused' : '') + " searchBar--" + barColor, ref: this.searchBar },
            React.createElement("div", { className: 'searchBar__input' },
                React.createElement("input", { type: "text", value: value, onChange: function (e) { return onChange(e); }, placeholder: placeholder, onFocus: function () { return _this.handleFocus(); }, onBlur: function () { return _this.handleFocus(); } }),
                React.createElement(SvgIcon_1.default, { name: 'search', type: barColor })),
            React.createElement("div", { className: "searchBar__bar" })));
    };
    return SearchBar;
}(React.Component));
exports.default = SearchBar;
//# sourceMappingURL=SearchBar.js.map