'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPropTypes = exports.Options = exports.Custom = undefined;

var _react = require('react');

var _keys = require('./keys');

var CustomShape = {};
var Custom = _react.PropTypes.shape(CustomShape);
// children can be an array or an object of custom props
CustomShape[_keys.childrenKey] = _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(Custom), _react.PropTypes.objectOf(Custom)]);

var MatcherPropTypes = [_react.PropTypes.func, _react.PropTypes.instanceOf(RegExp), _react.PropTypes.number, _react.PropTypes.string];
var Matcher = _react.PropTypes.oneOfType(MatcherPropTypes);
MatcherPropTypes.push(_react.PropTypes.arrayOf(Matcher));
var Options = _react.PropTypes.shape({
  ignore: Matcher,
  raw: Matcher,
  bind: _react.PropTypes.object
});

/**
 * Adds the Custom and Options PropTypes to a React component
 * @param {Function} component - A React component
 */
function addPropTypes(component) {
  if (!component.propTypes) {
    component.propTypes = {};
  }
  component.propTypes[_keys.customKey] = Custom;
  component.propTypes[_keys.optionsKey] = Options;
}

exports.Custom = Custom;
exports.Options = Options;
exports.addPropTypes = addPropTypes;