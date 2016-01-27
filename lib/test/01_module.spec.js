import expect from 'expect';
import opts, { PropTypesOpts, ComponentOpts } from '../';

describe('module', () => {
  it('should expose a default function (opts)', () => {
    expect(opts).toBeA('function');
  });

  it('should expose a "PropTypesOpts" property', () => {
    expect(PropTypesOpts).toNotBe(undefined);
  });

  it('should expose a "ComponentOpts" property', () => {
    expect(ComponentOpts).toNotBe(undefined);
  });
});
