import { createSelector } from 'reselect';
import { makeSelectNetworksByCountry } from './networkSelectors';

export const countryDomain = ({ country = {} }) => country;

export const makeSelectCountryCities = () =>
  createSelector(
    makeSelectNetworksByCountry(),
    countryDomain,
    (networkByCountry, domain) => {
      if (
        !(
          domain.selectedCountryCode &&
          networkByCountry[domain.selectedCountryCode]
        )
      ) {
        return {};
      }
      return {
        countryCode: domain.selectedCountryCode,
        cities: networkByCountry[domain.selectedCountryCode],
      };
    },
  );
