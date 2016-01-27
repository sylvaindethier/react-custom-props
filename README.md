# react-opts
[![Build Status](https://travis-ci.org/sylvaindethier/react-optsProps.svg?branch=master)](https://travis-ci.org/sylvaindethier/react-optsProps)

> Configurable props for React components.

Add configurable props or HTML attributes to React (any ?) element / component.

## Use case: Design a fully configurable component

  * With stateless function
```jsx
import React, {PropTypes} from 'react';
import opts, {PropTypesOpts} from 'react-opts';

export default function HelloWorld(props) {
  return (
    // inject root optional props
    <h1 {...opts(props)}>
      Hello
      // inject named child optional props
      <span {...opts(props, 'span_whatEverTheName')}>
        {props.name}
      </span> !
    </h1>
  );
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,

  // add optional props (not required)
  opts: PropTypesOpts
};
```

  * With ES6 `ComponentOpts` class
```jsx
import React, {PropTypes} from 'react';
import {ComponentOpts} from 'react-opts';

class HelloWorld extends ComponentOpts {
  render() {
    return (
      // inject root optional props
      <h1 {...this.opts()}>
        Hello
        // inject indexed child optional props
        <span {...this.opts(0)}>
          {props.name}
        </span> !
      </h1>
    );
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};
```

  * Or with ES6 React `Component` class
```jsx
import React, {PropTypes, Component} from 'react';
import opts, {PropTypesOpts} from 'react-opts';

class HelloWorld extends Component {
  render() {
    return (
      // inject root optional props
      <h1 {...opts(this.props)}>
        Hello
        // inject named child optional props
        <span {...opts(this.props, 'span_whatEverTheName')}>
          {props.name}
        </span> !
      </h1>
    );
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  opts: PropTypesOpts
};
```


## Use case: Add optional props to those components

The configurable HelloWorld component has:
  - a required `name` props
  - an optional `opts` props

Use with no `opts` props (trivial).
```jsx
const node = (
  <HelloWorld name="foo" />
);
```

Use with `opts` simple root props
```jsx
const opts = {
  // optional root props can be a value
  className: 'hello-world'
}
const node = (
  <HelloWorld name="foo" opts={opts} />
);

// or if you prefer
const HelloWorldOpts = { opts: {
  className: 'hello-world'
}};
const node_ = (
  <HelloWorld name="foo" {...HelloWorldOpts} />
);
```

Use with `opts` callback root props
```jsx
const HelloWorldOpts = { opts: {
  // optional root props can be a callback
  className: (props, state) => ('hello-world')
}};
```

Use with `opts.childrenOpts` array (indexed `opts`)
```jsx
const HelloWorldOpts = { opts: {
  // optional 'childrenOpts' props can be an array
  childrenOpts: [
    {
      style: {backgroundColor: 'yellow'}
    }
  ]
}};
```

Use with `opts.childrenOpts` object (named `opts`)
```jsx
const HelloWorldOpts = { opts: {
  // optional 'childrenOpts' props can be an object
  childrenOpts: {
    span: {
      style: {backgroundColor: 'yellow'}
    }
  }
}};
```
