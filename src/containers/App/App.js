import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectNetworksByCountry, makeSelectNetworkLoading } from '../../selectors/networkSelectors';
import { makeSelectCountryCities } from '../../selectors/countrySelectors';
import { fetchNetworks } from '../../actions/network.actions';
import { selectCountry } from '../../actions/country.actions';

import { Flag } from './../../components/FlagItem';
import CountriesList from '../../components/CountryList';
import CityCard from '../../components/CityCard';
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
  background: ${colors.darkBackground};
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

export const App = (props) => {
  useEffect(() => {
    props.fetchNetworks();
  }, []);

  const { countryCode, cities = [] } = props.selectedCountry;
  return (
    <AppContainer role="main">
      {props.loading ? (
        <div style={{margin:'10px auto'}}>loading ...</div>
      ): (
        <>
          <CountriesList
            countries={props.countries}
            onSelect={props.selectCountry}
            active={countryCode}
          />
          <AppBody>
            <AppHeader><Flag country={countryCode} /></AppHeader>
            <SelectedResults data-testid="citiesList">
              {cities.map((city, i) =>(<CityCard key={city.id} city={city} />))}
            </SelectedResults>
          </AppBody>
        </>
      )}
    </AppContainer>
  );
};

App.propTypes = {
  fetchNetworks: PropTypes.func.isRequired,
  selectCountry: PropTypes.func.isRequired,
  countries: PropTypes.object,
  loading: PropTypes.bool,
  selectedCountry: PropTypes.shape({
    countryCode: PropTypes.string,
    cities: PropTypes.arrayOf(PropTypes.object),
  }),
};
App.defaultProps = {
  loading: false,
  selectedCountry: {},
  countries: {},
  cities: [],
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  fetchNetworks: () => dispatch(fetchNetworks()),
  selectCountry: (countryCode) => dispatch(selectCountry(countryCode)),
});
const mapStateToProps = createStructuredSelector({
  loading: makeSelectNetworkLoading(),
  countries: makeSelectNetworksByCountry(),
  selectedCountry: makeSelectCountryCities(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(App);
