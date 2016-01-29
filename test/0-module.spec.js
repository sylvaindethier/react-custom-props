var expect = require('expect');
var lib = require('../react-confprops');

describe('module', function() {
  it('should expose a default function (conf)', function() {
    expect(lib).toBeA('function');
  });

  it('should expose a "ReactPropTypesConf" property', function() {
    expect(lib.ReactPropTypesConf).toNotBe(undefined);
  });
  it('should expose a "PropTypesConf" property', function() {
    expect(lib.PropTypesConf).toNotBe(undefined);
  });
  it('"PropTypesConf" should reference "ReactPropTypesConf"', function() {
    expect(lib.PropTypesConf).toBe(lib.ReactPropTypesConf);
  });

  it('should expose a "ReactComponentConf" property', function() {
    expect(lib.ReactComponentConf).toNotBe(undefined);
  });
  it('should expose a "ComponentConf" property', function() {
    expect(lib.ComponentConf).toNotBe(undefined);
  });
  it('"ComponentConf" should reference "ReactComponentConf"', function() {
    expect(lib.ComponentConf).toBe(lib.ReactComponentConf);
  });
});
