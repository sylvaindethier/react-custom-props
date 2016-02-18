'use strict';
import expect from 'expect';
import dist from '../../dist/ReactCustomProps';

describe('dist ES2015 Module', function() {
  it('should expose a "custom" function', function() {
    expect(dist.custom).toBeA('function');
  });
});
