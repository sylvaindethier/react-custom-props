import Component from 'react/lib/ReactComponent';
import PropTypesConf from './PropTypesConf';
import conf from './conf';

export default class ComponentConf extends Component {
  /**
   * Gets the optional conf props
   * @param {string|number} child - The child conf if required
   * @return {object|undefined} The conf props or child conf props
   */
  conf(child) {
    return conf(child, this.props, this.state);
  }
}
ComponentConf.propTypes = {
  conf: PropTypesConf
};
