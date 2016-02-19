(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactCustomProps"] = factory(require("react"));
	else
		root["ReactCustomProps"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addPropTypesCustom = exports.ReactPropTypesCustomOptions = exports.PropTypesCustomOptions = exports.ReactPropTypesCustom = exports.PropTypesCustom = exports.ReactComponentCustomProps = exports.CustomPropsComponent = undefined;
	
	var _custom = __webpack_require__(3);
	
	var _Component = __webpack_require__(6);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _PropTypes = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _custom.custom;
	exports.CustomPropsComponent = _Component2.default;
	exports.ReactComponentCustomProps = _Component2.default;
	exports.PropTypesCustom = _PropTypes.Custom;
	exports.ReactPropTypesCustom = _PropTypes.Custom;
	exports.PropTypesCustomOptions = _PropTypes.Options;
	exports.ReactPropTypesCustomOptions = _PropTypes.Options;
	exports.addPropTypesCustom = _PropTypes.addPropTypes;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var customKey = 'custom';
	var optionsKey = 'customOptions';
	var childrenKey = 'children';
	
	exports.customKey = customKey;
	exports.optionsKey = optionsKey;
	exports.childrenKey = childrenKey;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addPropTypes = exports.Options = exports.Custom = undefined;
	
	var _react = __webpack_require__(5);
	
	var _keys = __webpack_require__(1);
	
	var CustomShape = {};
	var Custom = _react.PropTypes.shape(CustomShape);
	// children can be an array or an object of custom props
	CustomShape[_keys.childrenKey] = _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(Custom), _react.PropTypes.objectOf(Custom)]);
	
	var MatcherPropTypes = [_react.PropTypes.func, _react.PropTypes.instanceOf(RegExp), _react.PropTypes.number, _react.PropTypes.string];
	var Matcher = _react.PropTypes.oneOfType(MatcherPropTypes);
	MatcherPropTypes.push(_react.PropTypes.arrayOf(Matcher));
	var Options = _react.PropTypes.shape({
	  ignore: Matcher,
	  raw: Matcher,
	  bind: _react.PropTypes.object
	});
	
	/**
	 * Adds the Custom and Options PropTypes to a React component
	 * @param {Function} component - A React component
	 */
	function addPropTypes(component) {
	  if (!component.propTypes) {
	    component.propTypes = {};
	  }
	  component.propTypes[_keys.customKey] = Custom;
	  component.propTypes[_keys.optionsKey] = Options;
	}
	
	exports.Custom = Custom;
	exports.Options = Options;
	exports.addPropTypes = addPropTypes;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.custom = exports.createResolver = exports.matchesCall = exports.getOptions = exports.defaults = undefined;
	
	var _utils = __webpack_require__(4);
	
	var _childPath = __webpack_require__(7);
	
	var _keys = __webpack_require__(1);
	
	// constants
	var defaults = {
	  ignore: null,
	  raw: /^on\w/,
	  bind: null
	};
	
	/**
	 * Gets a custom props options with defaults
	 * @param {Object} props - A props object
	 * @return {Object} The custom options with defaults
	 */
	function getOptions(props) {
	  // merge defaults and props options key value
	  return Object.assign({}, defaults, (0, _utils.getValue)(props, _keys.optionsKey));
	}
	
	/**
	 * Tests if a key/value matches a call (Function and not raw)
	 * @param {*} key - A key to test against raw matcher
	 * @param {*} value - A value to test against isFunction matcher
	 * @param {*} raw - A raw matcher
	 * @return {Boolean} Whether or not the key/value matches a call
	 */
	function matchesCall(key, value, raw) {
	  return (0, _utils.matches)(value, _utils.isFunction) && !(0, _utils.matches)(key, raw);
	}
	
	/**
	 * Creates a resolver function that eval a given custom props
	 * @param {Object} custom - A custom props object
	 * @param {Object} ignore, raw, bind - An custom options object
	 * @return {Function} The resolver function
	 */
	function createResolver(custom, _ref) {
	  var ignore = _ref.ignore;
	  var raw = _ref.raw;
	  var bind = _ref.bind;
	
	  return function resolver() {
	    if ((0, _utils.isVoid)(custom)) {
	      return undefined;
	    }
	
	    var args = arguments;
	    var resolved = {};
	    Object.keys(custom).forEach(function (key) {
	      // skip ignore keys
	      if ((0, _utils.matches)(key, ignore)) {
	        return;
	      }
	
	      var value = custom[key];
	      // apply with arguments if matches call, assign otherwise
	      resolved[key] = matchesCall(key, value, raw) ? value.apply(bind, args) : value;
	    });
	    return resolved;
	  };
	}
	
	/**
	 * Creates a resolver for a props at a given child path
	 * @param {Object} props - A props object
	 * @param {...Number|String|Array} childPath - The child path to get the custom props from
	 * @return {Function} The resolver function
	 */
	function custom(props) {
	  for (var _len = arguments.length, childPath = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    childPath[_key - 1] = arguments[_key];
	  }
	
	  // get the unique child path if so
	  if (childPath.length === 1 && (0, _utils.isArray)(childPath[0])) {
	    childPath = childPath[0];
	  }
	
	  var custom = (0, _childPath.getCustomAt)(props, childPath);
	  var options = getOptions(props);
	
	  // return the resolver
	  return createResolver(custom, options);
	}
	
	exports.defaults = defaults;
	exports.getOptions = getOptions;
	exports.matchesCall = matchesCall;
	exports.createResolver = createResolver;
	exports.custom = custom;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	// shortcuts
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isArray = Array.isArray;
	var isNumber = Number.isInteger;
	
	/**
	 * Tests if a value is void
	 * @param {*} value - A value to test
	 * @return {Boolean} Whether or not the value is void
	 */
	function isVoid(value) {
	  return value === undefined || value === null;
	}
	
	/**
	 * Tests if a value is a String
	 * @param {*} value - A value to test
	 * @return {Boolean} Whether or not the value is a String
	 */
	function isString(value) {
	  return typeof value === 'string';
	}
	
	/**
	 * Tests if a value is a Function
	 * @param {*} value - A value to test
	 * @return {Boolean} Whether or not the value is a Function
	 */
	function isFunction(value) {
	  return value instanceof Function;
	}
	
	/**
	 * Tests if a value is a RegExp
	 * @param {*} value - A value to test
	 * @return {Boolean} Whether or not the value is a RegExp
	 */
	function isRegExp(value) {
	  return value instanceof RegExp;
	}
	
	/**
	 * Tests if a value matches against matcher(s)
	 * @param {*} value - A value to test
	 * @param {*|RegExp|Function|Array} matcher - A matcher to test against
	 * @return {Boolean} Whether or not the value matches againt the matcher(s)
	 */
	function matches(value, matcher) {
	  if (isArray(matcher)) {
	    // matches for every matchers only if not empty, false otherwise
	    return matcher.length === 0 ? false : matcher.every(function (m) {
	      return matches(value, m);
	    });
	  }
	  if (isFunction(matcher)) {
	    return Boolean(matcher(value));
	  }
	  if (isRegExp(matcher)) {
	    return matcher.test(value);
	  }
	  if (isVoid(matcher)) {
	    return false;
	  }
	  return value === matcher;
	}
	
	/**
	 * Gets an object's key value
	 * @param {Object} obj - An object
	 * @param {String} key - A key
	 * @return {*} The object's key value
	 */
	function getValue(obj, key) {
	  return isVoid(obj) ? undefined : obj[key];
	}
	
	exports.isArray = isArray;
	exports.isNumber = isNumber;
	exports.isVoid = isVoid;
	exports.isString = isString;
	exports.isFunction = isFunction;
	exports.isRegExp = isRegExp;
	exports.matches = matches;
	exports.getValue = getValue;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _custom2 = __webpack_require__(3);
	
	var _PropTypes = __webpack_require__(2);
	
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getCustomAt = exports.getChildAt = exports.getChild = exports.toChildren = undefined;
	
	var _utils = __webpack_require__(4);
	
	var _keys = __webpack_require__(1);
	
	var pathSeparator = '.';
	
	/**
	 * Gets a custom props child (index of children key)
	 * @param {Object} custom - A custom props object
	 * @param {Number|String} child - A child index or name
	 * @return {*} The custom props child
	 */
	function getChild(custom, child) {
	  // get the custom children and return its child
	  return (0, _utils.getValue)((0, _utils.getValue)(custom, _keys.childrenKey), child);
	}
	
	/**
	 * Converts a child path to children array
	 * @param {Number|String|Array} childPath - A childPath to convert
	 * @throws {TypeError} If the given childPath is not a Number, String, or Array
	 * @return {Array} The children array
	 */
	function toChildren(childPath) {
	  if ((0, _utils.isVoid)(childPath)) {
	    return [];
	  }
	  if ((0, _utils.isNumber)(childPath)) {
	    return [childPath];
	  }
	  if ((0, _utils.isString)(childPath)) {
	    return childPath.length ? childPath.split(pathSeparator) : [];
	  }
	  if ((0, _utils.isArray)(childPath)) {
	    // map path with toChildren, and return the flat array
	    return Array.prototype.concat.apply([], childPath.map(toChildren));
	  }
	  throw new TypeError('Invalid `childPath` arguments type');
	}
	
	/**
	 * Gets a custom props child (index of children key) at a given child path
	 * @param {Object} custom - A custom props object
	 * @param {Number|String|Array} childPath - A child path to get the child from
	 * @return {*} The custom props child at the given child path
	 */
	function getChildAt(custom, childPath) {
	  var props = custom;
	  toChildren(childPath).forEach(function (child) {
	    props = getChild(props, child);
	  });
	  return props;
	}
	
	/**
	 * Gets a custom props at a given child path
	 * @param {Object} props - A props object
	 * @param {Number|String|Array} childPath - A child path to get the custom props from
	 * @return {*} The custom props at the given child path
	 */
	function getCustomAt(props, childPath) {
	  // get the custom props and return its child from the child path
	  return getChildAt((0, _utils.getValue)(props, _keys.customKey), childPath);
	}
	
	exports.toChildren = toChildren;
	exports.getChild = getChild;
	exports.getChildAt = getChildAt;
	exports.getCustomAt = getCustomAt;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ReactCustomProps.js.map