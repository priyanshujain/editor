webpackJsonp([0,1],{

/***/ "61pe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _Editor = __webpack_require__("Enp/");

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app-container' },
        _react2.default.createElement(_Editor2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ "Enp/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactQuill = __webpack_require__("TWqO");

var _reactQuill2 = _interopRequireDefault(_reactQuill);

__webpack_require__("9BT8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editor = function (_Component) {
  _inherits(Editor, _Component);

  function Editor(props) {
    _classCallCheck(this, Editor);

    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

    var storedData = JSON.parse(localStorage.getItem('data'));
    _this.state = {
      value: '' + (storedData ? storedData : ''),
      theme: 'snow'
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Editor, [{
    key: 'handleChange',
    value: function handleChange(value) {
      this.setState({ value: value });
      localStorage.setItem('data', JSON.stringify(value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.state.value;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement(_reactQuill2.default, {
            theme: this.state.theme,
            onChange: function onChange(value) {
              return _this2.handleChange(value);
            },
            value: this.state.value,
            modules: Editor.modules,
            formats: Editor.formats,
            bounds: '.app',
            placeholder: this.props.placeholder
          })
        )
      );
    }
  }]);

  return Editor;
}(_react.Component);

exports.default = Editor;


Editor.modules = {
  toolbar: [[{ header: '1' }, { header: '2' }, { font: [] }], [{ size: [] }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], ['link', 'image', 'video'], ['clean']]
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
};Editor.formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video'];

/*
 * PropType validation
 */
Editor.propTypes = {
  placeholder: _react2.default.PropTypes.string
};

/***/ }),

/***/ "KtSt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__("61pe");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_Component) {
	_inherits(Root, _Component);

	function Root(props) {
		_classCallCheck(this, Root);

		return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, props));
	}

	_createClass(Root, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_App2.default, null);
		}
	}]);

	return Root;
}(_react.Component);

exports.default = Root;

/***/ }),

/***/ "lVK7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("j1ja");

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Root = __webpack_require__("KtSt");

var _Root2 = _interopRequireDefault(_Root);

__webpack_require__("xVWP");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Root2.default, null), document.getElementById('app'));

/***/ }),

/***/ "xVWP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["lVK7"]);
//# sourceMappingURL=app.e697c1e1be2df4bb0bcc.js.map