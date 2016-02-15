'use strict';
const PropTypes = require('react/lib/ReactPropTypes');
const keys = require('./keys');
const customKey = keys.custom;
const optionsKey = keys.options;
const childrenKey = keys.children;


const CustomShape = {};
const Custom = PropTypes.shape(CustomShape);
CustomShape[childrenKey] = PropTypes.oneOfType([
  PropTypes.arrayOf(Custom),
  PropTypes.objectOf(Custom),
]);

const MatcherPropTypes = [
  PropTypes.func,
  PropTypes.instanceOf(RegExp),
  PropTypes.number,
  PropTypes.string,
];
const Matcher = PropTypes.oneOfType(MatcherPropTypes);
MatcherPropTypes.push(PropTypes.arrayOf(Matcher));

const Options = PropTypes.shape({
  ignore: Matcher,
  raw: Matcher,
  bind: PropTypes.object,
});

/**
 * Adds the Custom and Options PropTypes to a React component
 * @param {Function} component - A React component
 */
function addPropTypes(component) {
  if (!component.propTypes) { component.propTypes = {}; }
  component.propTypes[customKey] = Custom;
  component.propTypes[optionsKey] = Options;
}


module.exports = {
  Custom: Custom,
  Options: Options,
  addPropTypes: addPropTypes,
};
