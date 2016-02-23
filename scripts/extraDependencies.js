#!/usr/bin/env node
'use strict';
/* eslint no-console:0 */

var p = require('../package.json');

var peerDependencies = p.peerDependencies;
var optionalDependencies = p.optionalDependencies;

var dependencies = [];
[peerDependencies, optionalDependencies].forEach(function(deps) {
  for (var name in deps) {
    if (!deps.hasOwnProperty(name)) { continue; }
    dependencies.push(name + '@' + deps[name]);
  }
});
console.log(dependencies.join(' '));
process.exit(0);
