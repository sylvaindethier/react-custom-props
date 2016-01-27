import Component from 'react/lib/ReactComponent';
import PropTypesConf from './PropTypesConf';
import conf from './conf';

export default class ComponentConf extends Component {
  conf(child) {
    return conf(this.state, this.props, child);
  }
}
ComponentConf.propTypes = {
  conf: PropTypesConf
};
