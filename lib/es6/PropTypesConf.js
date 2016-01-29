import PropTypes from 'react/lib/ReactPropTypes';

const PropTypesConf = PropTypes.shape({
  childrenOpts: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ])
});
export default PropTypesConf;
