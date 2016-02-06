'use strict';
/* eslint max-len:[1, 90, 4] */
const expect = require('expect');

const utils = require('../utils');
const defaults = utils.defaults;
const getOption = utils.getOption;
const isVoid = utils.isVoid;
const isValueOf = utils.isValueOf;
const isAccepted = utils.isAccepted;
const isIgnored = utils.isIgnored;
const isRestricted = utils.isRestricted;
const isHandler = utils.isHandler;
const isResolver = utils.isResolver;
const isRaw = utils.isRaw;
const isResolvable = utils.isResolvable;


const opts = {
  accept: ['resolved', 'shouldBeResolved', 'shouldNotBeResolved', 'onClick'],
  ignore: ['conf', 'shouldBeExcluded'],
  resolver: ['resolved', 'shouldBeResolved', 'shouldNotBeResolved'],
  raw: ['shouldNotBeResolved'],
};


describe('lib/utils', function() {
  it('getOption should return the option value or default', function() {
    expect(getOption).toBeA('function');
    expect(getOption(undefined, 'ignore')).toBe(defaults.ignore);
    expect(getOption({}, 'ignore')).toBe(defaults.ignore);
    expect(getOption(opts, 'ignore')).toBe(opts.ignore);
    expect(getOption(opts, 'accept')).toBe(opts.accept);
  });

  it('isVoid should return whether or not the value is void', function() {
    expect(isVoid).toBeA('function');
    expect(isVoid(false)).toBe(false);
    expect(isVoid(undefined)).toBe(true);
    expect(isVoid(null)).toBe(true);
  });

  it('isValueOf should return whether or not the value is in the array', function() {
    expect(isValueOf).toBeA('function');
    expect(isValueOf(undefined, [])).toBe(false);
    expect(isValueOf(false, ['', 'foo'])).toBe(false);
    expect(isValueOf('foo', ['bar'])).toBe(false);
    expect(isValueOf('foo', ['foo'])).toBe(true);
  });

  it('isAccepted should return whether or not the key is accepted', function() {
    expect(isAccepted).toBeA('function');
    // empty accept keys provided should always return true
    expect(isAccepted('foo', ['bar'])).toBe(false);
    expect(isAccepted('foo', [])).toBe(true);
    expect(isAccepted('foo', ['foo'])).toBe(true);
  });

  it('isIgnored should return whether or not the key is ignored', function() {
    expect(isIgnored).toBeA('function');
    expect(isIgnored('foo', [])).toBe(false);
    expect(isIgnored('foo', ['foo'])).toBe(true);
  });

  it('isRestricted should return whether or not the key is restricted', function() {
    // ignored || !accepted
    expect(isRestricted).toBeA('function');
    expect(isRestricted('foo', [], [])).toBe(false);
    expect(isRestricted('foo', [], ['foo'])).toBe(false);
    expect(isRestricted('foo', [], ['bar'])).toBe(true);
    expect(isRestricted('foo', ['foo'], ['bar'])).toBe(true);
  });

  it('isHandler should return whether or not the key is a handler', function() {
    expect(isHandler).toBeA('function');
    expect(isHandler('foo')).toBe(false);
    expect(isHandler('on')).toBe(false);
    expect(isHandler('onFoo')).toBe(true);
    expect(isHandler('onClick')).toBe(true);
  });

  it('isResolver should return whether or not the key is a resolver key', function() {
    expect(isResolver).toBeA('function');
    expect(isResolver('onClick', [])).toBe(false);
    expect(isResolver('onClick', ['foo'])).toBe(false);
    expect(isResolver('foo', ['bar'])).toBe(false);
    expect(isResolver('onClick', ['onClick'])).toBe(true);
    expect(isResolver('foo', [])).toBe(true);
    expect(isResolver('foo', ['foo'])).toBe(true);
  });

  it('isRaw should return whether or not the key is a raw key', function() {
    expect(isRaw).toBeA('function');
    expect(isRaw('foo', [])).toBe(false);
    expect(isRaw('foo', ['foo'])).toBe(true);
  });

  it('isResolvable should return whether or not the key is resolvable', function() {
    // resolver && !raw
    expect(isResolvable).toBeA('function');
    expect(isResolvable('onClick', [], [])).toBe(false);
    expect(isResolvable('onClick', ['onClick'], ['onClick'])).toBe(false);
    expect(isResolvable('foo', ['bar'], [])).toBe(false);
    expect(isResolvable('foo', [], ['foo'])).toBe(false);
    expect(isResolvable('onClick', ['onClick'], [])).toBe(true);
    expect(isResolvable('foo', [], [])).toBe(true);
    expect(isResolvable('foo', ['foo'], [])).toBe(true);
  });
});
