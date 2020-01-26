import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {compose} from 'redux';
import {connect} from 'react-redux';

import { fetchNetworks } from '../../actions/network.actions.js'

const App = (props) => {
  useEffect(() => {
    props.fetchNetworks();
  }, []);

  return (
    <div>My App</div>
  );
};

App.propTypes = {
  fetchNetworks: PropTypes.func.isRequired,
  networks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      location: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      company: PropTypes.arrayOf(PropTypes.string),
    }),
  )
};
App.defaultProps = {
  networks: [],
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  fetchNetworks: () => dispatch(fetchNetworks())
});
const mapStateToProps = ({ networks }) => ({
  networks
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect,
)(App);
