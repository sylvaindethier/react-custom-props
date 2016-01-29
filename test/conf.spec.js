var expect = require('expect');
var conf = require('../react-confprops');

describe('conf function', function() {
  it('should return undefined if "conf" is not provided', function() {
    var props = {};
    expect(conf(props)).toBe(undefined);
  });

  it('should return the "conf" props unless its child "conf" key', function() {
    var props = {conf: {
      foo: 'bar',
      conf: 'shouldNotCopy'
    }};
    expect(conf(props)).toEqual({foo: 'bar'});
  });

  it('should return the "conf" computed props if callback', function() {
    var props = {conf: {
      foo: function() {
        return 'bar';
      }
    }};
    expect(conf(props)).toEqual({foo: 'bar'});
  });

  it('should return undefined if child "conf" is not provided', function() {
    var props = {};
    expect(conf(1, props)).toBe(undefined);
    expect(conf('div', props)).toBe(undefined);
  });

  it('should return the indexed child "conf"', function() {
    var props = {conf: {
      conf: [{foo: 'bar'}, {bar: 'baz'}]
    }};
    expect(conf(0, props)).toEqual({foo: 'bar'});
    expect(conf(1, props)).toEqual({bar: 'baz'});
  });

  it('should return the named child "conf"', function() {
    var props = {conf: {
      conf: {
        div: {foo: 'bar'},
        SomeComponent: {bar: 'baz'}
      }
    }};
    expect(conf('div', props)).toEqual({foo: 'bar'});
    expect(conf('SomeComponent', props)).toEqual({bar: 'baz'});
  });

  it('should return the child "conf" computed props', function() {
    var iprops = {conf: {
      conf: [{
        foo: function() {
          return 'bar';
        }
      }]
    }};
    expect(conf(0, iprops)).toEqual({foo: 'bar'});

    var nprops = {conf: {
      conf: {div: {
        foo: function() {
          return 'bar';
        }
      }}
    }};
    expect(conf('div', nprops)).toEqual({foo: 'bar'});
  });
});
