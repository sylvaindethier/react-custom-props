'use strict';
import { Component } from 'react';
import { custom as _custom } from './custom';
import { addPropTypes } from './PropTypes';

class CustomPropsComponent extends Component {
  /**
   * Creates a resolver for a given child path
   * @param {...Number|String|Array} child - The child path to get the custom props from
   * @return {Function} The resolver function
   */
  custom(...childPath) {
    return _custom(this.props, ...childPath);
  }
}

addPropTypes(CustomPropsComponent);


export default CustomPropsComponent;
