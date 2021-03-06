/* eslint max-len:0 no-inline-comments:0 */
module.exports = {
  root: true,

  env: {
    browser: true, // browser global variables.
    node: true, // Node.js global variables and Node.js scoping.
    // commonjs: true, // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
    // worker: true, // web workers global variables.
    // amd: true, // defines require() and define() as global variables as per the amd spec.
    // mocha: true, // adds all of the Mocha testing global variables.
    // jasmine: true, // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
    // jest: true, // Jest global variables.
    // phantomjs: true, // PhantomJS global variables.
    // protractor: true, // Protractor global variables.
    // qunit: true, // QUnit global variables.
    // jquery: true, // jQuery global variables.
    // prototypejs: true, // Prototype.js global variables.
    // shelljs: true, // ShellJS global variables.
    // meteor: true, // Meteor global variables.
    // mongo: true, // MongoDB global variables.
    // applescript: true, // AppleScript global variables.
    // nashorn: true, // Java 8 Nashorn global variables.
    // serviceworker: true, // Service Worker global variables.
    // embertest: true, // Ember test helper globals.
    // webextensions: true, // WebExtensions globals.
    es6: true, // enable all ECMAScript 6 features except for modules.
  },

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },

  ecmaFeatures: {
    arrowFunctions: true,
    // binaryLiterals: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    // forOf: true,
    // generators: true,
    objectLiteralComputedProperties: true,
    // objectLiteralDuplicateProperties: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    // octalLiterals: true,
    // regexUFlag: true,
    // regexYFlag: true,
    restParams: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    // unicodeCodePointEscapes: true,
    // globalReturn: true,
    // experimentalObjectRestSpread: true,
  },

  // plugins: [],

  extends: [
    'eslint:recommended',
    'google',
  ],

  rules: {
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'comma-dangle': [2, 'always-multiline'],
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],
    'object-curly-spacing': [2, 'always'],
  },
};
