'use strict';
const expect = require('expect');

const childPath = require('../lib/childPath');
const toChildren = childPath.toChildren;
const getChild = childPath.getChild;
const getChildAt = childPath.getChildAt;
const getCustomAt = childPath.getCustomAt;

const keys = require('../lib/keys');
const customKey = keys.custom;
const childrenKey = keys.children;

const Custom = { id: 'props' };
const CustomFoo = { id: 'props.foo' };
const CustomFooBar = { id: 'props.foo.bar' };
const CustomFooBarBaz = { id: 'props.foo.bar.baz' };
CustomFooBar[childrenKey] = { baz: CustomFooBarBaz };
const CustomFooBaz = { id: 'props.foo.baz' };
CustomFoo[childrenKey] = { bar: CustomFooBar, baz: CustomFooBaz };
Custom[childrenKey] = { foo: CustomFoo };

const props = { name: 'value' };
props[customKey] = Custom;

describe('lib/child', function() {
  it('toChildren should return the children array', function() {
    expect(toChildren).toBeA('function');
    expect(toChildren()).toEqual([]);
    // Number
    expect(toChildren(0)).toEqual([0]);
    // String
    expect(toChildren('')).toEqual([]);
    expect(toChildren('foo')).toEqual(['foo']);
    expect(toChildren('foo.bar.baz')).toEqual(['foo', 'bar', 'baz']);
    // Array
    expect(toChildren([])).toEqual([]);
    expect(toChildren([0])).toEqual([0]);
    expect(toChildren([''])).toEqual([]);
    expect(toChildren(['foo'])).toEqual(['foo']);
    expect(toChildren(['foo.bar.baz'])).toEqual(['foo', 'bar', 'baz']);
    expect(toChildren(['foo', 'bar.baz'])).toEqual(['foo', 'bar', 'baz']);
    expect(toChildren([0, '', 'foo', 'bar.baz'])).toEqual([0, 'foo', 'bar', 'baz']);
  });

  it('getChild should return the child', function() {
    expect(getChild).toBeA('function');
    expect(getChild()).toBe(undefined);
    expect(getChild({})).toBe(undefined);
    expect(getChild(Custom, 'foo')).toBe(Custom[childrenKey].foo);
    expect(getChild(Custom, 'bar')).toBe(Custom[childrenKey].bar);
  });

  it('getChildAt should return the child at the given path', function() {
    expect(getChildAt).toBeA('function');
    expect(getChildAt()).toBe(undefined);
    expect(getChildAt(Custom, 'undef')).toBe(undefined);
    expect(getChildAt(Custom)).toBe(Custom);
    expect(getChildAt(Custom, '')).toBe(Custom);
    expect(getChildAt(Custom, [])).toBe(Custom);

    expect(getChildAt(Custom, 'foo'))
      .toBe(Custom[childrenKey].foo);
    expect(getChildAt(Custom, 'foo.bar'))
      .toBe(Custom[childrenKey].foo[childrenKey].bar);
    expect(getChildAt(Custom, 'foo.bar.baz'))
      .toBe(Custom[childrenKey].foo[childrenKey].bar[childrenKey].baz);
    expect(getChildAt(Custom, 'foo.baz'))
      .toBe(Custom[childrenKey].foo[childrenKey].baz);
  });

  it('getCustomAt should return the custom props at the given path', function() {
    expect(getCustomAt).toBeA('function');
    expect(getCustomAt()).toBe(undefined);
    expect(getCustomAt({})).toBe(undefined);
    expect(getCustomAt(props)).toBe(Custom);
    expect(getCustomAt(props, '')).toBe(Custom);
    expect(getCustomAt(props, 'foo.bar'))
      .toBe(Custom[childrenKey].foo[childrenKey].bar);
    expect(getCustomAt(props, ['foo', 'bar']))
      .toBe(Custom[childrenKey].foo[childrenKey].bar);
  });
});
