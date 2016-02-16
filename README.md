# ReactCustomProps
> Custom configurable props for React components / elements.

Add custom configurable props or HTML attributes to React components / elements, or any HTML elements.

[![NPM Package Stats][npm-image]][npm-url]
[![Build Status][travis-ci-image]][travis-ci-url]


## Install

Instal via npm: `npm install --save react-custom-props`

View the [JSbin demo][demo-url]


## Use case: Add custom props to elements

Say we have a customizable `HelloWorld` component which has:
  * a required `name` props
  * an optional `custom` props
  * an optional `customOptions` props

Use with no `custom` props (trivial).
```jsx
const node = (
  <HelloWorld name="foo" />
);
```

Use with `custom` props values.
```jsx
const custom = {
  // optional custom props can be a value
  className: 'hello-world'
}
const node = (
  <HelloWorld name="foo" custom={custom} />
);
```
```jsx
// or if you prefer
const custom = { custom: {
  className: 'hello-world'
}};
const node = (
  <HelloWorld name="foo" {...custom} />
);
```

Use with `custom` props functions.
Hanlders are not evaluated by default (props name matches `/^on\w/` RegExp).
```jsx
const custom = { custom: {
  // optional custom props can be a function
  className: (...args) => ('hello-world'),
  // handlers /^on\w/ are not evaluated by default
}};
```

Use with `custom.children` array (indexed child)
```jsx
const custom = { custom: {
  // optional children custom props can be an array
  children: [
    {
      style: {backgroundColor: 'yellow'}
    }
  ]
}};
```

Use with `custom.children` object (named child)
```jsx
const custom = { custom: {
  // optional children custom props can be an object
  children: {
    span: {
      style: {backgroundColor: 'yellow'}
    }
  }
}};
```

## Use case: Design a fully configurable component

  * With stateless function

Custom props are evaluated with `props` in the following example.
```jsx
import React, {PropTypes} from 'react';
import {custom, addPropTypesCustom} from 'react-custom-props';

export default function HelloWorld(props) {
  return (
    // inject optional root props
    <h1 {...custom(props)(props)}>
      Hello
      // inject optional named child props
      <span {...custom(props, 'span')(props)}>
        {props.name}
      </span> !
    </h1>
  );
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
};

// add PropTypes Custom (not required)
addPropTypesCustom(HelloWorld);
```

  * With `CustomPropsComponent` class

Custom props are evaluated with `this.props` and `this.state` in the following example.
```jsx
import React, {PropTypes} from 'react';
import {CustomPropsComponent} from 'react-custom-props';

class HelloWorld extends CustomPropsComponent {
  render() {
    return (
      // inject optional root props
      <h1 {...this.custom()(this.props, this.state)}>
        Hello
        // inject optional named child props
        <span {...this.custom('span')(this.props, this.state)}>
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

  * Or with React `Component` class

Custom props are resolved with `this.props` and `this.state` in the following example.
```jsx
import React, {PropTypes, Component} from 'react';
import {custom, addPropTypesCustom} from 'react-custom-props';

class HelloWorld extends Component {
  render() {
    return (
      // inject optional root custom props
      <h1 {...custom(this.props)(this.props, this.state)}>
        Hello
        // inject optional named child props
        <span {...custom(this.props, 'span')(this.props, this.state)}>
          {props.name}
        </span> !
      </h1>
    );
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
};
addPropTypesCustom(HelloWorld);
```


## TODO

Have a look at this (even if I already know that):
 * https://github.com/boennemann/badges
 * http://shields.io/
 * https://www.smashingmagazine.com/2016/02/writing-next-generation-reusable-javascript-modules/
 *


[travis-ci-image]: https://travis-ci.org/sylvaindethier/react-custom-props.svg?branch=master&style=flat-square
[travis-ci-url]: https://travis-ci.org/sylvaindethier/react-custom-props
[npm-image]: https://nodei.co/npm/react-confprops.png?downloads=true&stars=true
[npm-url]: https://www.npmjs.org/package/react-confprops
[demo-url]: https://jsbin.com/xivuqe/edit?js,output
