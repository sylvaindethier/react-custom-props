'use strict';
const utils = require('./utils');
const isVoid = utils.isVoid;
const isArray = utils.isArray;
const isFunction = utils.isFunction;
const matches = utils.matches;
const getValue = utils.getValue;

const childPath = require('./childPath');
const getCustomAt = childPath.getCustomAt;

const keys = require('./keys');
const optionsKey = keys.options;


// constants
const defaults = {
  ignore: null,
  raw: /^on\w/,
  bind: null,
};

/**
 * Gets a custom props options with defaults
 * @param {Object} props - A props object
 * @return {Object} The custom options with defaults
 */
function getOptions(props) {
  // merge defaults and props options key value
  return Object.assign({}, defaults, getValue(props, optionsKey));
}

/**
 * Tests if a key/value matches a call (Function and not raw)
 * @param {*} key - A key to test against raw matcher
 * @param {*} value - A value to test against isFunction matcher
 * @param {*} raw - A raw matcher
 * @return {Boolean} Whether or not the key/value matches a call
 */
function matchesCall(key, value, raw) {
  return matches(value, isFunction) && !matches(key, raw);
}

/**
 * Creates a resolver function that eval a given custom props
 * @param {Object} custom - A custom props object
 * @param {Object} options - An custom options object
 * @return {Function} The resolver function
 */
function createResolver(custom, options) {
  return function resolver() {
    if (isVoid(custom)) { return undefined; }
    const args = arguments;

    const resolved = {};
    Object.keys(custom).forEach(function(key) {
      const value = custom[key];

      // skip ignore keys
      if (matches(key, options.ignore)) { return; }

      // apply with arguments if matches call, assign otherwise
      resolved[key] = matchesCall(key, value, options.raw) ?
        value.apply(options.bind, args) : value;
    });
    return resolved;
  };
}

/**
 * Creates a resolver for a props at a given child path
 * @param {Object} props - A props object
 * @param {...Number|String|Array} child - The child path to get the custom props from
 * @return {Function} The resolver function
 */
function custom(props) {
  // extract the child path: arguments unless the first one (props)
  const len = arguments.length;
  let path = new Array(len ? len - 1 : 0);
  for (let i = 1; i < len; ++i) {
    path[i - 1] = arguments[i];
  }
  // get the unique child path if so
  if (path.length === 1 && isArray(path[0])) { path = path[0]; }

  const custom = getCustomAt(props, path);
  const options = getOptions(props);

  // return the resolver
  return createResolver(custom, options);
}


module.exports = {
  defaults: defaults,
  getOptions: getOptions,
  matchesCall: matchesCall,
  createResolver: createResolver,
  custom: custom,
};
