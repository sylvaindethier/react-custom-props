/**
 * Gets the optional conf or child conf props
 * @param {object} props - A component props
 * @param {number|string} child - The child conf props
 * @param {object|undefined} state - A component state if any
 * @return {object|undefined} The conf props
 */
export default function conf(props, child, state) {
  const o = props.conf;
  if (o === null || o === undefined) {
    return undefined;
  }

  const childType = typeof child === 'number' || typeof child === 'string';
  if (o.conf && childType) {
    return o.conf[child];
  }

  const p = {};
  for (const key in o) {
    // skip 'conf' key
    if (o.hasOwnProperty(key) && key !== 'conf') {
      p[key] = typeof o[key] === 'function' ?
        o[key](props, state) : o[key];
    }
  }

  return p;
}
