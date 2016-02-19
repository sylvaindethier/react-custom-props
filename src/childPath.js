'use strict';
import { isVoid, isInteger, isString, isArray, getValue } from './utils';
import { customKey, childrenKey } from './keys';


const pathSeparator = '.';

/**
 * Gets a custom props child (index of children key)
 * @param {Object} custom - A custom props object
 * @param {Number|String} child - A child index or name
 * @return {*} The custom props child
 */
function getChild(custom, child) {
  // get the custom children and return its child
  return getValue(getValue(custom, childrenKey), child);
}

/**
 * Converts a child path to children array
 * @param {Number|String|Array} childPath - A childPath to convert
 * @throws {TypeError} If the given childPath is not a Number, String, or Array
 * @return {Array} The children array
 */
function toChildren(childPath) {
  if (isVoid(childPath)) { return []; }
  if (isInteger(childPath)) { return [childPath]; }
  if (isString(childPath)) {
    return childPath.length ? childPath.split(pathSeparator) : [];
  }
  if (isArray(childPath)) {
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
  let props = custom;
  toChildren(childPath).forEach(function(child) {
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
  return getChildAt(getValue(props, customKey), childPath);
}


export {
  toChildren,
  getChild,
  getChildAt,
  getCustomAt,
};
