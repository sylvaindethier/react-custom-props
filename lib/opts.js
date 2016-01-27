export default function opts(props, child, state) {
  const o = props.opts;
  if (o === null || o === undefined) return undefined;

  const childType = typeof child;
  if (o.childrenOpts && (
    childType === 'number' || childType === 'string'
  )) return o.childrenOpts[child];

  const p = {};
  for (const key in o) {
    // skip 'childrenOpts' key
    if (o.hasOwnProperty(key) && key !== 'childrenOpts') {
      p[key] = typeof o[key] === 'function' ?
        o[key](props, state) : o[key];
    }
  }

  return p;
}
