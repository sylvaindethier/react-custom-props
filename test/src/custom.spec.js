'use strict';
import expect from 'expect';
import { customKey, childrenKey, optionsKey } from '../../src/keys';
import {
  defaults,
  getOptions,
  matchesCall,
  createResolver,
  custom,
} from '../../src/custom';


const identity = v => (v);
const value = 'resolved value';
const Custom = {
  shouldBeIgnored: 'ignored',
  resolved: 'bar',
  shouldBeResolved: identity,
  onClick: identity,
  [childrenKey]: {
    foo: { resolved: 'foo child' },
    bar: { shouldBeResolved: identity },
  },
};

const Options = {
  // override defaults `ignore` value
  ignore: ['shouldBeIgnored'],
  // additional property
  other: 'value',
  // defaults `raw` and `bind` value
};

const props = {
  name: 'value',
  [customKey]: Custom,
  [optionsKey]: Options,
};


describe('src/custom', function() {
  it('getOptions should return the options with defaults', function() {
    expect(getOptions).toBeA('function');
    expect(getOptions()).toEqual(defaults);
    expect(getOptions({})).toEqual(defaults);
    expect(getOptions(props)).toEqual({
      ignore: Options.ignore,
      other: Options.other,
      raw: defaults.raw,
      bind: defaults.bind,
    });
    Options.raw = defaults.raw;
    Options.bind = defaults.bind;
  });

  it('matchesCall should return whether or not the key/value has to be called', function() {
    expect(matchesCall).toBeA('function');
    expect(matchesCall('resolved', Custom.resolved, Options.raw)).toBe(false);
    expect(matchesCall('onClick', Custom.onClick, Options.raw)).toBe(false);
    expect(matchesCall('shouldBeResolved', Custom.shouldBeResolved, Options.raw))
      .toBe(true);
  });

  it('createResolver should return the resolver function', function() {
    expect(createResolver).toBeA('function');
    expect(createResolver(undefined, {})).toBeA('function');
    expect(createResolver(undefined, {})()).toBe(undefined);

    const resolver = createResolver(Custom, Options);
    expect(resolver(value)).toEqual({
      resolved: Custom.resolved,
      // identity function resolve to value
      shouldBeResolved: Custom.shouldBeResolved(value),
      // handlers are not resolved
      onClick: Custom.onClick,
      [childrenKey]: Custom[childrenKey],
    });
  });

  it('custom should return the resolver function for a given path', function() {
    expect(custom).toBeA('function');
    expect(custom()).toBeA('function');
    expect(custom()()).toBe(undefined);

    expect(custom(props)(value)).toEqual({
      resolved: Custom.resolved,
      // identity function resolve to value
      shouldBeResolved: Custom.shouldBeResolved(value),
      // handlers are not resolved
      onClick: Custom.onClick,
      [childrenKey]: Custom[childrenKey],
    });
    expect(custom(props, 'foo')(value)).toEqual(Custom[childrenKey].foo);
    expect(custom(props, ['bar'])(value)).toEqual({
      shouldBeResolved: Custom[childrenKey].bar.shouldBeResolved(value),
    });
  });
});
