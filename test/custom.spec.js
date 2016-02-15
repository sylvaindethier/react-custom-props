'use strict';
const expect = require('expect');

const libCustom = require('../lib/custom');
const defaults = libCustom.defaults;
const getOptions = libCustom.getOptions;
const matchesCall = libCustom.matchesCall;
const createResolver = libCustom.createResolver;
const custom = libCustom.custom;

const keys = require('../lib/keys');
const customKey = keys.custom;
const childrenKey = keys.children;
const optionsKey = keys.options;


const identity = function(v) { return v; };
const value = 'resolved value';
const Custom = {
  shouldBeIgnored: 'ignored',
  resolved: 'bar',
  shouldBeResolved: identity,
  onClick: identity,
};
Custom[childrenKey] = {
  foo: { resolved: 'foo child' },
  bar: { shouldBeResolved: identity },
};

const Options = {
  // override defaults `ignore` value
  ignore: ['shouldBeIgnored'],
  // additional property
  other: 'value',
  // defaults `raw` and `bind` value
};

const props = { name: 'value' };
props[customKey] = Custom;
props[optionsKey] = Options;


describe('lib/custom', function() {
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
    expect(createResolver()).toBeA('function');
    expect(createResolver()()).toBe(undefined);

    const resolver = createResolver(Custom, Options);
    const resolved = {
      resolved: Custom.resolved,
      // identity function resolve to value
      shouldBeResolved: Custom.shouldBeResolved(value),
      // handlers are not resolved
      onClick: Custom.onClick,
    };
    resolved[childrenKey] = Custom[childrenKey];
    expect(resolver(value)).toEqual(resolved);
  });

  it('custom should return the resolver function for a given path', function() {
    expect(custom).toBeA('function');
    expect(custom()).toBeA('function');
    expect(custom()()).toBe(undefined);

    const resolved = {
      resolved: Custom.resolved,
      // identity function resolve to value
      shouldBeResolved: Custom.shouldBeResolved(value),
      // handlers are not resolved
      onClick: Custom.onClick,
    };
    resolved[childrenKey] = Custom[childrenKey];
    expect(custom(props)(value)).toEqual(resolved);
    expect(custom(props, 'foo')(value)).toEqual(Custom[childrenKey].foo);
    expect(custom(props, 'bar')(value)).toEqual({
      shouldBeResolved: Custom[childrenKey].bar.shouldBeResolved(value),
    });
  });
});
