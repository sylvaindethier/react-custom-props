'use strict';
import expect from 'expect';
import { customKey, optionsKey } from '../../src/keys';
import { addPropTypes, Custom, Options } from '../../src/PropTypes';


describe('src/PropTypes', function() {
  it('addPropTypes should adds the Custom and Options PropTypes', function() {
    const withPropTypes = { propTypes: {} };
    const withoutPropTypes = {};
    const propTypes = { [customKey]: Custom, [optionsKey]: Options };
    const returnAddPropTypes = component => {
      addPropTypes(component);
      return component;
    };

    expect(returnAddPropTypes(withPropTypes)).toEqual({ propTypes });
    expect(returnAddPropTypes(withoutPropTypes)).toEqual({ propTypes });
  });
});
