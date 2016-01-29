'use strict';

var ReactPropTypes = require('react/lib/ReactPropTypes');

/**
 * Gets the basic conf ReactPropType definition
 * @param {ReactPropType} propType - The conf ReactPropType
 * @return {ReactPropType} The conf ReactPropType
 */
function confPropType(propType) {
  return ReactPropTypes.oneOfType([
    ReactPropTypes.arrayOf(propType),
    propType
  ]);
}

var ReactPropTypesConf = ReactPropTypes.shape({
  conf: confPropType(ReactPropTypesConf)
});

module.exports = ReactPropTypesConf;
