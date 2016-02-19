'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.custom = exports.createResolver = exports.matchesCall = exports.getOptions = exports.defaults = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _utils = require('./utils');

var _childPath = require('./childPath');

var _keys3 = require('./keys');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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