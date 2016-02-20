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

## Use case: Add custom props to elements
Say we have a customizable `HelloWorld` component which has:
  * a required `name` props
  * an optional `custom` props
  * an optional `customOptions` props

### Use with `custom` props values
```javascript
const custom = {
  // optional custom props can be a value
  className: 'hello-world'
}
const node = (
  <HelloWorld name="foo" custom={custom} />
);
```
Or if you prefer (further examples will use this notation):
```javascript
const props = { name: 'foo', custom: {
  className: 'hello-world'
}};
const node = (
  <HelloWorld {...props} />
);
```

### Use with `custom` props functions
Hanlders are not evaluated by default (props name matches `/^on\w/` RegExp).
```javascript
const custom = { custom: {
  // optional custom props can be a function
  className: (...args) => ('hello-world'),

  // handlers /^on\w/ are not evaluated by default
  onClick: (ev) => {
    ev.preventDefault(); return false;
  }
}};
```

### Use with `custom.children` array (indexed child)
```javascript
const custom = { custom: {
  // optional children custom props can be an array
  children: [
    // will be applied to the first child
    {
      style: {backgroundColor: 'yellow'}
    }
  ]
}};
```

### Use with `custom.children` object (named child)
```javascript
const custom = { custom: {
  // optional children custom props can be an object
  children: {
    // will be applied to the 'span' child
    span: {
      style: {backgroundColor: 'yellow'}
    }
  }
}};
```

### Use with `customOptions` props
Available `customOptions` are:
  * `ignore`: A `matcher` to ignore some props. The matched props are ignored
in the resulting custom props.
Default is `null`.
  * `raw`: A `matcher` to copy as is some props. The matched props are copied as is
in the resulting custom props.
Default is `/^on\w/`, so that handlers are not evaluated.
  * `bind`: A value for `this` in the evaluated custom props function.
Default is `null`

A `matcher` can be either:
  * a value: The custom props name matches if it equals the value.
  * `null` or `undefined` (void): The custom props name never matches.
  * a `RegExp`: The custom props name matches if it the RegExp test success
(i.e. /^foo/.test(name) w/ name = 'foo' is a success).
  * a `Function`: The custom props name matches if the function returns
a truthly value.
  * an `Array` of the previous `matcher` types: The custom props name matches if
it matches every matchers.

```javascript
import custom from 'react-custom-props';

const props = {
  custom: {
    shouldBeIgnored: 'value', // should be ignored
    ignoreThisOneToo: 'value', // ignored too
    onClick: (ev) => (false), // handlers are raw
    rawValue: 'rawValue', //
    rawFunc: () => ('rawFunc')
    propValue: 'propValue',
    propFunc: () => ('propFunc'), // should be evaluated to 'propFunc'
    prop: (value) => (value) // should be evaluated to the passed in value
  },
  customOptions: {
    ignore: ['shouldBeIgnored', /^ignore/],
    raw: [/^on\w/, (name) => (name.substr(0, 3) === 'raw')]
    // let `bind` be the default (null)
  }
};
const customProps = custom(props)('argument');
console.log(customProps);
/*
{
  onClick: (ev) => (false),
  rawValue: 'rawValue',
  rawFunc: () => ('rawFunc'),
  propValue: 'propValue',
  propFunc: 'propFunc',
  prop: 'argument'
}
*/
```

## Use case: Design a fully configurable component

### With stateless function
Custom props are evaluated with `props` in the following example.
```javascript
import React, {PropTypes} from 'react';
import custom, {addPropTypesCustom} from 'react-custom-props';

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

### With React `Component` class
Custom props are evaluated with `this.props` and `this.state` in the following example.
```javascript
import React, {PropTypes, Component} from 'react';
import custom, {addPropTypesCustom} from 'react-custom-props';

class HelloWorld extends Component {
  render() {
    return (
      // inject optional root props
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
  name: PropTypes.string.isRequired
};

// add PropTypes Custom (not required)
addPropTypesCustom(HelloWorld);
```
