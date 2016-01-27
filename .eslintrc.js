module.exports = {
  parser: 'babel-eslint',

  env: {
    // browser: true, // browser global variables.
    node: true, // Node.js global variables and Node.js scoping.
    // commonjs: true, // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
    // worker: false, // web workers global variables.
    // amd: false, // defines require() and define() as global variables as per the amd spec.
    mocha: true, // adds all of the Mocha testing global variables.
    // jasmine: false, // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
    // jest: false, // Jest global variables.
    // phantomjs: false, // PhantomJS global variables.
    // protractor: false, // Protractor global variables.
    // qunit: false, // QUnit global variables.
    // jquery: false, // jQuery global variables.
    // prototypejs: false, // Prototype.js global variables.
    // shelljs: false, // ShellJS global variables.
    // meteor: false, // Meteor global variables.
    // mongo: false, // MongoDB global variables.
    // applescript: false, // AppleScript global variables.
    // nashorn: false, // Java 8 Nashorn global variables.
    // serviceworker: false, // Service Worker global variables.
    // embertest: false, // Ember test helper globals.
    // webextensions: false, // WebExtensions globals.
    es6: true, // enable all ECMAScript 6 features except for modules.
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
    modules: true,
    // objectLiteralComputedProperties: true,
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
    // jsx: true,
    experimentalObjectRestSpread: true,
  },

  // plugins: [],

  extends: [
    'eslint:recommended',
    'airbnb',
  ],

  rules: {
    // 'require-jsdoc': 1,
  },
};
