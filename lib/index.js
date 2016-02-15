'use strict';
const custom = require('./custom');
const Component = require('./Component');
const PropTypes = require('./PropTypes');


module.exports = {
  custom: custom.custom,

  CustomPropsComponent: Component,
  ReactComponentCustomProps: Component,

  PropTypesCustom: PropTypes.Custom,
  ReactPropTypesCustom: PropTypes.Custom,
  PropTypesCustomOptions: PropTypes.Options,
  ReactPropTypesCustomOptions: PropTypes.Options,
  addPropTypesCustom: PropTypes.addPropTypes,
};
