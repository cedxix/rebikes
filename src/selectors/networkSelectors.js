import { createSelector } from 'reselect';

export const networksDomain = ({ networks = {} }) => networks;

export const makeSelectNetworkLoading = () => createSelector(
  networksDomain,
  ({ loading = false }) => loading,
);
export const makeSelectNetworksByCountry = () =>
  createSelector(networksDomain, (networks = {}) => {
    if (!networks.networks) return {};

    const countries = {};
    networks.networks.forEach((network) => {
      const { location = {}, company, ...rest } = network;

      if(location.longitude <= -50) {
        if (!countries[location.country]) countries[location.country] = [];
        let companyList = [];
        if(company && Array.isArray(company)){
          companyList = company
        } else if (company) {
          companyList = [company]
        }
        countries[location.country].push({ location, company: companyList, ...rest });
      }
    });
    return countries;
});
