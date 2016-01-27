import { PropTypes, Component } from 'react';

export const PropTypesOpts = PropTypes.shape({
  childrenOpts: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
});

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

export class ComponentOpts extends Component {
  opts(child) {
    return opts(this.props, child, this.state);
  }
}
ComponentOpts.propTypes = {
  opts: PropTypesOpts,
};

opts.PropTypes = PropTypesOpts;
opts.Component = ComponentOpts;
