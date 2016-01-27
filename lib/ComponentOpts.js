import Component from 'react/lib/ReactComponent';
import PropTypesOpts from './PropTypesOpts';
import opts from './opts';

export default class ComponentOpts extends Component {
  opts(child) {
    return opts(this.props, child, this.state);
  }
}
ComponentOpts.propTypes = {
  opts: PropTypesOpts,
};
