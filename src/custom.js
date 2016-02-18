'use strict';

import { isVoid, isArray, isFunction, matches, getValue } from './utils';
import { getCustomAt } from './childPath';
import { optionsKey } from './keys';


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
 * @param {Object} ignore, raw, bind - An custom options object
 * @return {Function} The resolver function
 */
function createResolver(custom, { ignore, raw, bind }) {
  return function resolver() {
    if (isVoid(custom)) { return undefined; }

    const args = arguments;
    const resolved = {};
    Object.keys(custom).forEach(key => {
      // skip ignore keys
      if (matches(key, ignore)) { return; }

      const value = custom[key];
      // apply with arguments if matches call, assign otherwise
      resolved[key] = matchesCall(key, value, raw) ?
        value.apply(bind, args) : value;
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
function custom(props, ...childPath) {
  // get the unique child path if so
  if (childPath.length === 1 && isArray(childPath[0])) {
    childPath = childPath[0];
  }

  const custom = getCustomAt(props, childPath);
  const options = getOptions(props);

  // return the resolver
  return createResolver(custom, options);
}


export {
  defaults,
  getOptions,
  matchesCall,
  createResolver,
  custom,
};
