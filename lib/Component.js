'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _custom2 = require('./custom');

var _PropTypes = require('./PropTypes');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomPropsComponent = function (_Component) {
  _inherits(CustomPropsComponent, _Component);

  function CustomPropsComponent() {
    _classCallCheck(this, CustomPropsComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CustomPropsComponent).apply(this, arguments));
  }

  _createClass(CustomPropsComponent, [{
    key: 'custom',

    /**
     * Creates a resolver for a given child path
     * @param {...Number|String|Array} child - The child path to get the custom props from
     * @return {Function} The resolver function
     */
    value: function custom() {
      for (var _len = arguments.length, childPath = Array(_len), _key = 0; _key < _len; _key++) {
        childPath[_key] = arguments[_key];
      }

      return _custom2.custom.apply(undefined, [this.props].concat(childPath));
    }
  }]);

  return CustomPropsComponent;
}(_react.Component);

(0, _PropTypes.addPropTypes)(CustomPropsComponent);

exports.default = CustomPropsComponent;