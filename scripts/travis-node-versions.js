#!/usr/bin/env node
'use strict';
/* eslint no-console:0 */
var yaml = require('js-yaml');
var fs = require('fs');
var path = require('path');


// Get travis file from arguments
var travisFile = process.argv.slice(2)[0];

// Build travis file path
var travisFilepath = path.join(__dirname, '..', travisFile);

// Get document, or throw exception on error
try {
  var travis = yaml.safeLoad(fs.readFileSync(travisFilepath, 'utf8'));

  // check travis.language is 'node_js'
  if (travis.language !== 'node_js') {
    throw new Error('Expected travis "language" to be node_js but found ' +
      String(travis.language)
    );
  }

  // check travis.node_js defined
  if (travis.node_js === undefined) {
    throw new TypeError('Expected travis "node_js"');
  }

  // print node_js versions and exit
  console.log(travis.node_js.join(' '));
  process.exit(0);
} catch (e) {
  console.error('Error', e);
  process.exit(1);
}
