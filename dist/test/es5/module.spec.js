var expect = require('expect');
var _module = require('../../ReactOptsProps');

var opts = _module.default;
describe('module', () => {
  it('should expose a default function (opts)', () => {
    expect(opts).toBeA('function');
  });

  it('should expose a "PropTypesOpts" property', () => {
    expect(_module.PropTypesOpts).toNotBe(undefined);
  });

  it('should expose a "ComponentOpts" property', () => {
    expect(_module.ComponentOpts).toNotBe(undefined);
  });
});
