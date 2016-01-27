import PropTypes from 'react/lib/ReactPropTypes';

const PropTypesOpts = PropTypes.shape({
  childrenOpts: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
});
export default PropTypesOpts;
