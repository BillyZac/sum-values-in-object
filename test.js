const assert = require('chai').assert;
const sum = require('./');

describe('Summer of values in an object', () => {
  it('is a function', () => {
    assert.equal(typeof sum, 'function');
  });
});
