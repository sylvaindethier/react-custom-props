var expect = require('expect');
var _module = require('../../ReactConfProps');

describe('module', () => {
  it('should expose a default function (conf)', () => {
    expect(_module.default).toBeA('function');
  });

  it('should expose a "PropTypesConf" property', () => {
    expect(_module.PropTypesConf).toNotBe(undefined);
  });

  it('should expose a "ComponentConf" property', () => {
    expect(_module.ComponentConf).toNotBe(undefined);
  });
});
