# ReactConfProps
[![Build Status](https://travis-ci.org/sylvaindethier/react-confprops.svg?branch=master)](https://travis-ci.org/sylvaindethier/react-confprops)

> Configurable props for React components / elements.

Add configurable props or HTML attributes to React components, or any HTML elements.


## Install

`npm install --save react-confprops`

View the [JSbin demo](https://jsbin.com/xivuqe/edit?js,output)


## Use case: Design a fully configurable component

  * With stateless function
```jsx
import React, {PropTypes} from 'react';
import conf, {PropTypesConf} from 'react-confprops';

export default function HelloWorld(props) {
  return (
    // inject root optional props
    <h1 {...conf(props)}>
      Hello
      // inject named child optional props
      <span {...conf(props, 'whatEverTheName')}>
        {props.name}
      </span> !
    </h1>
  );
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,

  // add optional props (not required)
  conf: PropTypesConf
};
```

  * With ES6 `ComponentConf` class
```jsx
import React, {PropTypes} from 'react';
import {ComponentConf} from 'react-confprops';

class HelloWorld extends ComponentConf {
  render() {
    return (
      // inject root optional props
      <h1 {...this.conf()}>
        Hello
        // inject indexed child optional props
        <span {...this.conf(0)}>
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
import conf, {PropTypesOpts} from 'react-confprops';

class HelloWorld extends Component {
  render() {
    return (
      // inject conf props
      <h1 {...conf(this.props)}>
        Hello
        // inject named child optional props
        <span {...conf(this.props, 'whatEverTheName')}>
          {props.name}
        </span> !
      </h1>
    );
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  opts: PropTypesConf
};
```


## Use case: Add optional props to those components

The configurable HelloWorld component has:
  - a required `name` props
  - an optional `conf` props

Use with no `conf` props (trivial).
```jsx
const node = (
  <HelloWorld name="foo" />
);
```

Use with `conf` simple props
```jsx
const conf = {
  // optional conf props can be a value
  className: 'hello-world'
}
const node = (
  <HelloWorld name="foo" conf={conf} />
);

// or if you prefer
const HelloWorldConf = { conf: {
  className: 'hello-world'
}};
const node = (
  <HelloWorld name="foo" {...HelloWorldConf} />
);
```

Use with `conf` callback props
```jsx
const HelloWorldConf = { conf: {
  // optional conf props can be a callback
  className: (props, state) => ('hello-world')
}};
```

Use with `conf.conf` array (indexed child `conf`)
```jsx
const HelloWorldConf = { conf: {
  // optional child conf props can be an array
  conf: [
    {
      style: {backgroundColor: 'yellow'}
    }
  ]
}};
```

Use with `conf.conf` object (named child `conf`)
```jsx
const HelloWorldConf = { conf: {
  // optional child conf props can be an object
  conf: {
    span: {
      style: {backgroundColor: 'yellow'}
    }
  }
}};
```
