import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectNetworksByCountry } from '../../selectors/networkSelectors';
import { makeSelectCountryCities } from '../../selectors/countrySelectors';
import { fetchNetworks } from '../../actions/network.actions';
import { selectCountry } from '../../actions/country.actions';

import CountriesList from '../../components/CountryList';
import colors from '../../styles/colors';

const AppContainer = styled.main`
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  height: 100vh;
`;
const AppBody = styled.div`
  width: 100%;
  overflow-y: auto;
`;
const AppHeader = styled.div`
  background: ${colors.header};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`;
const SelectedResults = styled.div`
  background: yellow;
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

const App = (props) => {
  useEffect(() => {
    props.fetchNetworks();
  }, []);

  const { countryCode, cities } = props.selectedCountry;
  return (
    <AppContainer role="main">
      <CountriesList
        countries={props.countries}
        onSelect={props.selectCountry}
        active={countryCode}
      />
      <AppBody>
        <AppHeader>Header</AppHeader>
        <SelectedResults>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          assumenda atque aut delectus dolores et exercitationem facilis iure
          minima molestias necessitatibus nesciunt nisi nobis nostrum odio quas
          rem, voluptatibus voluptatum!
        </SelectedResults>
      </AppBody>
    </AppContainer>
  );
};

App.propTypes = {
  fetchNetworks: PropTypes.func.isRequired,
  selectCountry: PropTypes.func.isRequired,
  countries: PropTypes.object,
  selectedCountry: PropTypes.shape({
    countryCode: PropTypes.string,
    cities: PropTypes.arrayOf(PropTypes.object),
  }),
};
App.defaultProps = {
  countries: {},
  cities: [],
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  fetchNetworks: () => dispatch(fetchNetworks()),
  selectCountry: (countryCode) => dispatch(selectCountry(countryCode)),
});
const mapStateToProps = createStructuredSelector({
  countries: makeSelectNetworksByCountry(),
  selectedCountry: makeSelectCountryCities(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(App);
