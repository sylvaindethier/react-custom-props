'use strict';
const expect = require('expect');

const dist = require('../../dist/ReactCustomProps');

describe('dist CommonJS', function() {
  it('should expose a "custom" function', function() {
    expect(dist.custom).toBeA('function');
  });
});
