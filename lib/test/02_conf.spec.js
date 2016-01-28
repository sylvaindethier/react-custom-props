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
    expect(conf(1, props)).toBe(undefined);
    expect(conf('div', props)).toBe(undefined);
  });

  it('should return the indexed child "conf"', () => {
    const props = {conf: {
      conf: [{foo: 'bar'}, {bar: 'baz'}]
    }};
    expect(conf(0, props)).toEqual({foo: 'bar'});
    expect(conf(1, props)).toEqual({bar: 'baz'});
  });

  it('should return the named child "conf"', () => {
    const props = {conf: {
      conf: {
        div: {foo: 'bar'},
        SomeComponent: {bar: 'baz'}
      }
    }};
    expect(conf('div', props)).toEqual({foo: 'bar'});
    expect(conf('SomeComponent', props)).toEqual({bar: 'baz'});
  });

  it('should return the child "conf" computed props', () => {
    const iprops = {conf: {
      conf: [{
        foo: () => ('bar')
      }]
    }};
    expect(conf(0, iprops)).toEqual({foo: 'bar'});

    const nprops = {conf: {
      conf: {div: {
        foo: () => ('bar')
      }}
    }};
    expect(conf('div', nprops)).toEqual({foo: 'bar'});
  });
});
