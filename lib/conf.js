'use strict';

/**
 * Gets the optional conf or child conf props
 * @param {number|string} child - The child conf props
 * @param {object} props - A component props
 * @param {object|undefined} state - A component state if any
 * @return {object|undefined} The conf props
 */
function conf(child, props, state) {
  var childType = typeof child === 'number' || typeof child === 'string';
  var c = props === undefined ? undefined : props.conf;

  // map child conf parameters
  var childParams = {
    _props: props,
    _state: state,
    _conf: c === undefined || c.conf === undefined ? undefined : c.conf[child]
  };
  // map root conf parameters; child is props, props is state
  var rootParams = {
    _props: child,
    _state: props,
    _conf: child.conf
  };
  var params = childType ? childParams : rootParams;
  var _props = params._props;
  var _state = params._state;
  var _conf = params._conf;

  if (_conf === undefined) {
    return undefined;
  }

  // resolve conf
  var r = {};
  for (var key in _conf) {
    // skip 'conf' key
    if (_conf.hasOwnProperty(key) && key !== 'conf') {
      r[key] = typeof _conf[key] === 'function' ?
        _conf[key](_props, _state) : _conf[key];
    }
  }

  return r;
}

module.exports = conf;
