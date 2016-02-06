'use strict';

// defaults
const defaults = {
  accept: [],
  ignore: ['conf'],
  resolver: [],
  raw: [],
  bind: null,
};

/**
 * Tests if a value is void
 * @param {*} value - A value to test
 * @return {Boolean} Whether or not the value is void
 */
function isVoid(value) {
  return value === undefined || value === null;
}

/**
 * Gets an option or default value
 * @param {Object} obj - An object
 * @param {String} option - An option name
 * @return {*} The option value or default
 */
function getOption(obj, option) {
  return isVoid(obj) || isVoid(obj[option]) ? defaults[option] : obj[option];
}

/**
 * Tests if a value is in an array
 * @param {*} value - A value to search within the array
 * @param {Array} array - An array
 * @return {Boolean} Whether or not the value is in the array
 */
function isValueOf(value, array) {
  return array.indexOf(value) > -1;
}

/**
 * Tests if a key is accepted
 * @param {String} key - A key to test
 * @param {Array} keys - An array of keys
 * @return {Boolean} Whether or not the key is accepted
 */
function isAccepted(key, keys) {
  // only if keys is not empty (true otherwise), key in keys
  return keys.length ? isValueOf(key, keys) : true;
}

/**
 * Tests if a key is ignored
 * @param {String} key - A key to test
 * @param {Array} keys - An array of keys
 * @return {Boolean} Whether or not the key is ignored
 */
function isIgnored(key, keys) {
  // key in keys
  return isValueOf(key, keys);
}

/**
 * Tests if a key is restricted (ignored or not accepted)
 * @param {String} key - A key to test
 * @param {Array} ignore - An array of ignore keys
 * @param {Array} accept - An array of accept keys
 * @return {Boolean} Whether or not the key is restricted
 */
function isRestricted(key, ignore, accept) {
  return isIgnored(key, ignore) || !isAccepted(key, accept);
}

/**
 * Tests if a key is a handler (key matches 'on*')
 * @param {String} key - A key to test
 * @return {Boolean} Whether or not the key is a handler
 */
function isHandler(key) {
  // key matches 'on*'
  return /^on\w/.test(key);
}

/**
 * Tests if a key is a Resolver key
 * @param {String} key - A key to test
 * @param {Array} keys - An array of keys
 * @return {Boolean} Whether or not the key is a resolver key
 */
function isResolver(key, keys) {
  // key in keys, not handler otherwise
  return keys.length ? isValueOf(key, keys) : !isHandler(key);
}

/**
 * Tests if a key is a Raw key
 * @param {String} key - A key to test
 * @param {Array} keys - An array of keys
 * @return {Boolean} Whether or not the key is a raw key
 */
function isRaw(key, keys) {
  // key in keys
  return isValueOf(key, keys);
}

/**
 * Tests if a key is resolvable (resolver and not raw)
 * @param {String} key - A key to test
 * @param {Array} resolver - An array of resolver keys
 * @param {Array} raw - An array of raw keys
 * @return {Boolean} Whether or not the key is resolvable
 */
function isResolvable(key, resolver, raw) {
  return isResolver(key, resolver) && !isRaw(key, raw);
}


module.exports = {
  defaults: defaults,
  getOption: getOption,
  isVoid: isVoid,
  isValueOf: isValueOf,
  isAccepted: isAccepted,
  isIgnored: isIgnored,
  isRestricted: isRestricted,
  isHandler: isHandler,
  isResolver: isResolver,
  isRaw: isRaw,
  isResolvable: isResolvable,
};
