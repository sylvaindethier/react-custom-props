'use strict';
const expect = require('expect');
const lib = require('../../lib');

describe('lib CommonJS', function() {
  it('should expose a "custom" function', function() {
    expect(lib.custom).toBeA('function');
  });

  it('should expose a "PropTypesCustom" function', function() {
    expect(lib.PropTypesCustom).toBeA('function');
    expect(lib.ReactPropTypesCustom).toBeA('function');
  });

  it('should expose a "PropTypesCustomOptions" function', function() {
    expect(lib.PropTypesCustomOptions).toBeA('function');
    expect(lib.ReactPropTypesCustomOptions).toBeA('function');
  });

  it('should expose a "addPropTypesCustom" function', function() {
    expect(lib.addPropTypesCustom).toBeA('function');
  });
});
