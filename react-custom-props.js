'use strict';

var lib = require('./lib');
// fix ES2015 module to CommonJS module
module.exports = lib.default;
for (var key in lib) {
  if (lib.hasOwnProperty(key) && key !== 'default') {
    module.exports[key] = lib[key];
  }
}
