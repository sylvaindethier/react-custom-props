'use strict';
import { custom } from './custom';
import Component from './Component';
import { Custom, Options, addPropTypes } from './PropTypes';

export default custom;
export {
  Component as CustomPropsComponent, Component as ReactComponentCustomProps,
  Custom as PropTypesCustom, Custom as ReactPropTypesCustom,
  Options as PropTypesCustomOptions, Options as ReactPropTypesCustomOptions,
  addPropTypes as addPropTypesCustom,
};
