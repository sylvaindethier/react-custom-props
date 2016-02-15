'use strict';
const expect = require('expect');

const utils = require('../lib/utils');
// const defaults = utils.defaults;
const isVoid = utils.isVoid;
const isNumber = utils.isNumber;
const isString = utils.isString;
const isArray = utils.isArray;
const isFunction = utils.isFunction;
const isRegExp = utils.isRegExp;
const matches = utils.matches;
const getValue = utils.getValue;


describe('lib/utils', function() {
  it('isVoid should return whether or not the value is void', function() {
    expect(isVoid).toBeA('function');
    expect(isVoid(false)).toBe(false);
    expect(isVoid()).toBe(true);
    expect(isVoid(undefined)).toBe(true);
    expect(isVoid(null)).toBe(true);
  });

  it('isNumber should return whether or not the value is a Number', function() {
    expect(isNumber).toBeA('function');
    expect(isNumber()).toBe(false);
    expect(isNumber('0')).toBe(false);
    expect(isNumber(0)).toBe(true);
  });

  it('isString should return whether or not the value is a String', function() {
    expect(isString).toBeA('function');
    expect(isString()).toBe(false);
    expect(isString('')).toBe(true);
  });

  it('isArray should return whether or not the value is an Array', function() {
    expect(isArray).toBeA('function');
    expect(isArray()).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray([])).toBe(true);
  });

  it('isFunction should return whether or not the value is a Function', function() {
    expect(isFunction).toBeA('function');
    expect(isFunction()).toBe(false);
    expect(isFunction(isFunction)).toBe(true);
  });

  it('isRegExp should return whether or not the value is a RegExp', function() {
    expect(isRegExp).toBeA('function');
    expect(isRegExp()).toBe(false);
    expect(isRegExp('')).toBe(false);
    expect(isRegExp(/RegExp/)).toBe(true);
  });

  it('matches should return whether or not the value matches', function() {
    expect(matches).toBeA('function');
    let matcher;
    // void matcher always false
    expect(matches()).toBe(false);
    expect(matches('foo')).toBe(false);
    // value matcher
    matcher = 'foo';
    expect(matches('bar', matcher)).toBe(false);
    expect(matches('foo', matcher)).toBe(true);
    // RegExp matcher
    matcher = /^foo/;
    expect(matches('bar', matcher)).toBe(false);
    expect(matches('foo', matcher)).toBe(true);
    // Function matcher
    const identity = function(value) { return value; };
    matcher = identity;
    expect(matches(0, matcher)).toBe(false);
    expect(matches(1, matcher)).toBe(true);
    // Array matcher
    matcher = ['foo', /^foo/, identity];
    expect(matches('foo', [])).toBe(false);
    expect(matches('bar', matcher)).toBe(false);
    expect(matches('foo', matcher)).toBe(true);
  });

  it('getValue should return the key value', function() {
    const obj = { key: 'value' };
    const arr = ['value'];

    expect(getValue).toBeA('function');
    expect(getValue()).toBe(undefined);

    expect(getValue(obj)).toBe(undefined);
    expect(getValue(obj, 'key')).toBe(obj.key);
    expect(obj.foo).toBe(undefined);
    expect(getValue(obj, 'foo')).toBe(obj.foo);

    expect(getValue(arr)).toBe(undefined);
    expect(getValue(arr, 0)).toBe(arr[0]);
    expect(getValue(arr, '0')).toBe(arr['0']);
    expect(arr[1]).toBe(undefined);
    expect(getValue(arr, 1)).toBe(arr[1]);
    expect(arr['1']).toBe(undefined);
    expect(getValue(arr, '1')).toBe(arr['1']);
  });
});
