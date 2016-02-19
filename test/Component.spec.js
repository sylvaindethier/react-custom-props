'use strict';
import expect from 'expect';
import { customKey } from '../src/keys';
import Component from '../src/Component';

const identity = v => (v);
const value = 'resolved value';
const Custom = {
  resolved: 'bar',
  shouldBeResolved: identity,
  onClick: identity,
};
const component = new Component({ name: 'value', [customKey]: Custom });

describe('src/Component', function() {
  it('.custom should return the resolver function for a given path', function() {
    expect(component.custom()(value)).toEqual({
      resolved: Custom.resolved,
      shouldBeResolved: Custom.shouldBeResolved(value),
      onClick: Custom.onClick,
    });
  });
});
