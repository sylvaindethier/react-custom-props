'use strict';
import expect from 'expect';
import { customKey, childrenKey } from '../src/keys';
import {
  toChildren,
  getChild,
  getChildAt,
  getCustomAt,
} from '../src/childPath';


const Custom = {
  id: 'props',
  [childrenKey]: {
    foo: {
      id: 'props.foo',
      [childrenKey]: {
        baz: { id: 'props.foo.baz' },
        bar: {
          id: 'props.foo.bar',
          [childrenKey]: {
            baz: { id: 'props.foo.bar.baz' },
          },
        },
      },
    },
  },
};

const props = {
  name: 'value',
  [customKey]: Custom,
};


describe('src/childPath', function() {
  it('toChildren should return the children array', function() {
    expect(toChildren).toBeA('function');
    // void
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
    // throws TypeError
    expect(function(obj) {
      return toChildren(obj);
    }).withArgs({}).toThrow(TypeError);
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
