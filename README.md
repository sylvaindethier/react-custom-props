# ReactCustomProps
> Custom configurable props for React components / elements.

Add custom configurable props or HTML attributes to React components / elements, or any HTML elements.

[npm-url]: https://www.npmjs.org/package/react-custom-props
[npm-image]: https://nodei.co/npm/react-custom-props.svg?downloads=true&stars=true
[npm-version-image]: https://img.shields.io/npm/v/react-custom-props.svg?style=flat-square
[build-url]: https://travis-ci.org/sylvaindethier/react-custom-props
[build-image]: https://img.shields.io/travis/sylvaindethier/react-custom-props/master.svg?style=flat-square
[coverage-url]: https://coveralls.io/r/sylvaindethier/react-custom-props?branch=master
[coverage-image]: https://img.shields.io/coveralls/sylvaindethier/react-custom-props.svg?style=flat-square
[deps-image]: https://img.shields.io/david/sylvaindethier/react-custom-props.svg?style=flat-square
[deps-url]: https://david-dm.org/sylvaindethier/react-custom-props#info=dependencies
[devDeps-image]: https://img.shields.io/david/dev/sylvaindethier/react-custom-props.svg?style=flat-square
[devDeps-url]: https://david-dm.org/sylvaindethier/react-custom-props#info=devDependencies
[demo-url]: https://jsbin.com/xivuqe/edit?js,output


[![NPM Package Stats][npm-image]][npm-url]

[![NPM Version][npm-version-image]][npm-url]
[![Dependencies][deps-image]][deps-url]
[![Dev Dependencies][devDeps-image]][devDeps-url]
[![Build Status][build-image]][build-url]
[![Coverage Status][coverage-image]][coverage-url]


## Install
Instal via npm: `npm install --save react-custom-props`

View the [JSbin demo][demo-url]


## API
See the [API documentation file](API.md)


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
