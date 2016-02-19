'use strict';
var expect = require('expect');
var dist = require('../../dist/ReactCustomProps');

describe('dist/ReactCustomProps', function() {
  it('should expose a "default" function', function() {
    expect(dist.default).toBeA('function');
  });

  it('should expose a "PropTypesCustom" function', function() {
    expect(dist.PropTypesCustom).toBeA('function');
    expect(dist.ReactPropTypesCustom).toBeA('function');
  });

  it('should expose a "PropTypesCustomOptions" function', function() {
    expect(dist.PropTypesCustomOptions).toBeA('function');
    expect(dist.ReactPropTypesCustomOptions).toBeA('function');
  });

  it('should expose a "addPropTypesCustom" function', function() {
    expect(dist.addPropTypesCustom).toBeA('function');
  });
});
