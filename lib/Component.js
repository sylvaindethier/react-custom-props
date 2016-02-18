'use strict';
const ReactComponent = require('react').Component;
const customFunc = require('./custom').custom;

/**
 * ReactComponentCustomProps extends ReactComponent
 */
function ReactComponentCustomProps() {
  ReactComponent.apply(this, arguments);
}
// shortcut
const Component = ReactComponentCustomProps;

Component.prototype = Object.create(ReactComponent.prototype);
Component.prototype.constructor = Component;

/**
 * Creates a resolver for a given child path
 * @param {...Number|String|Array} child - The child path to get the custom props from
 * @return {Function} The resolver function
 */
Component.prototype.custom = function custom() {
  // safe copy arguments
  const len = arguments.length;
  var args = new Array(len + 1);
  for (let i = 0; i < len; ++i) {
    args[i + 1] = arguments[i];
  }
  // add this.props as first args
  args[0] = this.props;

  return customFunc.apply(null, args);
};


module.exports = Component;
