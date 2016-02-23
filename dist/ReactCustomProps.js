(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactCustomProps"] = factory(require("react"));
	else
		root["ReactCustomProps"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_30__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

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
	exports.addPropTypesCustom = exports.ReactPropTypesCustomOptions = exports.PropTypesCustomOptions = exports.ReactPropTypesCustom = exports.PropTypesCustom = exports.custom = exports.default = undefined;

	var _custom = __webpack_require__(9);

	var _PropTypes = __webpack_require__(7);

	exports.default = _custom.custom;
	exports.custom = _custom.custom;
	exports.PropTypesCustom = _PropTypes.Custom;
	exports.ReactPropTypesCustom = _PropTypes.Custom;
	exports.PropTypesCustomOptions = _PropTypes.Options;
	exports.ReactPropTypesCustomOptions = _PropTypes.Options;
	exports.addPropTypesCustom = _PropTypes.addPropTypes;

/***/ },
/* 1 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , core      = __webpack_require__(1)
	  , ctx       = __webpack_require__(18)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// shortcuts

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getValue = exports.matches = exports.isRegExp = exports.isFunction = exports.isString = exports.isVoid = exports.isInteger = exports.isArray = undefined;

	var _isInteger = __webpack_require__(10);

	var _isInteger2 = _interopRequireDefault(_isInteger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isInteger = _isInteger2.default;
	var isArray = Array.isArray;

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
	exports.isInteger = isInteger;
	exports.isVoid = isVoid;
	exports.isString = isString;
	exports.isFunction = isFunction;
	exports.isRegExp = isRegExp;
	exports.matches = matches;
	exports.getValue = getValue;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(19);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addPropTypes = exports.Options = exports.Custom = undefined;

	var _react = __webpack_require__(30);

	var _keys = __webpack_require__(2);

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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getCustomAt = exports.getChildAt = exports.getChild = exports.toChildren = undefined;

	var _utils = __webpack_require__(4);

	var _keys = __webpack_require__(2);

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
	  if ((0, _utils.isInteger)(childPath)) {
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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.custom = exports.createResolver = exports.matchesCall = exports.getOptions = exports.defaults = undefined;

	var _keys = __webpack_require__(12);

	var _keys2 = _interopRequireDefault(_keys);

	var _assign = __webpack_require__(11);

	var _assign2 = _interopRequireDefault(_assign);

	var _utils = __webpack_require__(4);

	var _childPath = __webpack_require__(8);

	var _keys3 = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	  return (0, _assign2.default)({}, defaults, (0, _utils.getValue)(props, _keys3.optionsKey));
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
	    (0, _keys2.default)(custom).forEach(function (key) {
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(15), __esModule: true };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27);
	module.exports = __webpack_require__(1).Number.isInteger;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(28);
	module.exports = __webpack_require__(1).Object.assign;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(29);
	module.exports = __webpack_require__(1).Object.keys;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(16);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(17);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(23)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(24)
	  , toObject = __webpack_require__(6)
	  , IObject  = __webpack_require__(21);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(5)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(3)
	  , core    = __webpack_require__(1)
	  , fails   = __webpack_require__(5);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(3);

	$export($export.S, 'Number', {isInteger: __webpack_require__(22)});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(3);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(25)});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(6);

	__webpack_require__(26)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }
/******/ ])
});
;