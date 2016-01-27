import expect from 'expect';
import opts, { PropTypesOpts, ComponentOpts } from '../';

describe('module', () => {
  it('should expose a default function', () => {
    expect(opts).toBeA('function');
    expect(opts.PropTypes).toExist();
    expect(opts.Component).toExist();
  });

  it('should expose properties', () => {
    expect(PropTypesOpts).toNotBe(null);
    expect(ComponentOpts).toNotBe(null);
  });
});
