'use strict';
// shortcuts
const isArray = Array.isArray;
const isInteger = Number.isInteger;

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
    return matcher.length === 0 ? false : matcher.every(
      m => (matches(value, m))
    );
  }
  if (isFunction(matcher)) { return Boolean(matcher(value)); }
  if (isRegExp(matcher)) { return matcher.test(value); }
  if (isVoid(matcher)) { return false; }
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

export {
  isArray,
  isInteger,
  isVoid,
  isString,
  isFunction,
  isRegExp,
  matches,
  getValue,
};
