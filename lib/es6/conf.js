/**
 * Gets the optional conf or child conf props
 * @param {number|string} child - The child conf props
 * @param {object} props - A component props
 * @param {object|undefined} state - A component state if any
 * @return {object|undefined} The conf props
 */
export default function conf(child, props, state) {
  const childType = typeof child === 'number' || typeof child === 'string';
  const c = props === undefined ? undefined : props.conf;

  // map child conf parameters
  const childParams = {
    _props: props,
    _state: state,
    _conf: c === undefined || c.conf === undefined ? undefined : c.conf[child]
  };
  // map root conf parameters; child is props, props is state
  const rootParams = {
    _props: child,
    _state: props,
    _conf: child.conf
  };
  const {_props, _state, _conf} = childType ? childParams : rootParams;
  if (_conf === undefined) {
    return undefined;
  }

  // resolve conf
  const r = {};
  for (const key in _conf) {
    // skip 'conf' key
    if (_conf.hasOwnProperty(key) && key !== 'conf') {
      r[key] = typeof _conf[key] === 'function' ?
        _conf[key](_props, _state) : _conf[key];
    }
  }

  return r;
}
