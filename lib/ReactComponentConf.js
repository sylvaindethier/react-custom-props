'use strict';

var ReactComponent = require('react/lib/ReactComponent');
var ReactPropTypesConf = require('./ReactPropTypesConf');
var conf = require('./conf');

/**
 * ReactComponentConf extends ReactComponent
 */
function ReactComponentConf() {
  ReactComponent.apply(this, arguments);
}

ReactComponentConf.prototype = Object.create(ReactComponent.prototype);
ReactComponentConf.prototype.constructor = ReactComponentConfProps;

/**
 * Gets the optional conf props
 * @param {string|number} child - The child conf if required
 * @return {object|undefined} The conf props or child conf props
 */
ReactComponentConf.prototype.conf =
ReactComponentConf.prototype.getConfProps =
function getConfProps(child) {
  return conf(child, this.props, this.state);
};

ReactComponentConf.propTypes = {
  conf: ReactPropTypesConf
};

module.exports = ReactComponentConf;
