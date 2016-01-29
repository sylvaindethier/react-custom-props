'use strict';

module.exports = require('./conf');
module.exports.ReactPropTypesConf = require('./ReactPropTypesConf');
module.exports.ReactComponentConf = require('./ReactComponentConf');
// isomorphic for es6
module.exports.PropTypesConf = module.exports.ReactPropTypesConf;
module.exports.ComponentConf = module.exports.ReactComponentConf;
