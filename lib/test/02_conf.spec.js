import expect from 'expect';
import conf from '../';

describe('conf function', () => {
  it('should return undefined if "conf" is not provided', () => {
    const props = {};
    expect(conf(props)).toBe(undefined);
  });

  it('should return the "conf" props unless its child "conf" key', () => {
    const props = {conf: {
      foo: 'bar',
      conf: 'shouldNotCopy'
    }};
    expect(conf(props)).toEqual({foo: 'bar'});
  });

  it('should return the "conf" computed props if callback', () => {
    const props = {conf: {
      foo: () => ('bar')
    }};
    expect(conf(props)).toEqual({foo: 'bar'});
  });

  it('should return undefined if child "conf" is not provided', () => {
    const props = {};
    expect(conf(props, 1)).toBe(undefined);
    expect(conf(props, 'div')).toBe(undefined);
  });

  it('should return the indexed child "conf"', () => {
    const props = {conf: {
      conf: [{foo: 'bar'}, {bar: 'baz'}]
    }};
    expect(conf(props, 0)).toEqual({foo: 'bar'});
    expect(conf(props, 1)).toEqual({bar: 'baz'});
  });

  it('should return the named child "conf"', () => {
    const props = {conf: {
      conf: {
        div: {foo: 'bar'},
        SomeComponent: {bar: 'baz'}
      }
    }};
    expect(conf(props, 'div')).toEqual({foo: 'bar'});
    expect(conf(props, 'SomeComponent')).toEqual({bar: 'baz'});
  });
});
