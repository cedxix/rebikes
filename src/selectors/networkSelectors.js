import { createSelector } from 'reselect';

export const networksDomain = ({ networks = {} }) => networks.networks;

export const makeSelectNetworksByCountry = () =>
  createSelector(networksDomain, (networks = []) => {
    if (!networks) return {};

    const countries = {};
    networks.forEach((network) => {
      const { location = {}, company, ...rest } = network;
      if (!countries[location.country]) countries[location.country] = [];
      let companyList = [];
      if(company && Array.isArray(company)){
        companyList = company
      } else if (company) {
        companyList = [company]
      }
      countries[location.country].push({ location, company: companyList, ...rest });
    });
    return countries;
  });
