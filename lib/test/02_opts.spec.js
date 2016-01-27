import expect from 'expect';
import opts from '../';

describe('opts function', () => {
  it('should return undefined if "opts" is not provided', () => {
    const props = {};
    expect(opts(props)).toBe(undefined);
  });

  it('should return the "opts" props unless its "childrenOpts" key', () => {
    const props = { opts: {
      foo: 'bar',
      childrenOpts: [],
    } };
    expect(opts(props)).toEqual({ foo: 'bar' });
  });

  it('should return the "opts" computed props if callback', () => {
    const props = { opts: {
      foo: () => ('bar'),
    } };
    expect(opts(props)).toEqual({ foo: 'bar' });
  });

  it('should return undefined if "opts.childrenOpts" is not provided', () => {
    const props = {};
    expect(opts(props, 1)).toBe(undefined);
    expect(opts(props, 'div')).toBe(undefined);
  });

  it('should return the "opts" indexed "childrenOpts"', () => {
    const props = { opts: {
      childrenOpts: [
        { foo: 'bar' },
        { bar: 'baz' },
      ],
    } };
    expect(opts(props, 0)).toEqual({ foo: 'bar' });
    expect(opts(props, 1)).toEqual({ bar: 'baz' });
  });

  it('should return the "opts" named "childrenOpts"', () => {
    const props = { opts: {
      childrenOpts: {
        div: { foo: 'bar' },
        SomeComponent: { bar: 'baz' },
      },
    } };
    expect(opts(props, 'div')).toEqual({ foo: 'bar' });
    expect(opts(props, 'SomeComponent')).toEqual({ bar: 'baz' });
  });
});
