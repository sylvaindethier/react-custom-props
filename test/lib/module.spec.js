'use strict';
import expect from 'expect';
import custom, {
  CustomPropsComponent, ReactComponentCustomProps,
  PropTypesCustom, ReactPropTypesCustom,
  PropTypesCustomOptions, ReactPropTypesCustomOptions,
  addPropTypesCustom,
} from '../../react-custom-props';


describe('lib Module', function() {
  it('should expose a default function', function() {
    expect(custom).toBeA('function');
  });

  it('should expose a "CustomPropsComponent" function', function() {
    expect(CustomPropsComponent).toBeA('function');
    expect(ReactComponentCustomProps).toBeA('function');
  });

  it('should expose a "PropTypesCustom" function', function() {
    expect(PropTypesCustom).toBeA('function');
    expect(ReactPropTypesCustom).toBeA('function');
  });

  it('should expose a "PropTypesCustomOptions" function', function() {
    expect(PropTypesCustomOptions).toBeA('function');
    expect(ReactPropTypesCustomOptions).toBeA('function');
  });

  it('should expose a "addPropTypesCustom" function', function() {
    expect(addPropTypesCustom).toBeA('function');
  });
});
