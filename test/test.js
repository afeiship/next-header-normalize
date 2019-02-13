var nx = require('next-js-core2');
require('../src/next-dasherize');

describe('nxDasherize.methods', function() {
  test('init', function() {
    expect(nx.dasherize('fontSize')).toBe('font-size');
  });
});
