import { createSelector } from 'reselect';

export const networksDomain = ({ networks = {} }) => networks.networks;

export const makeSelectNetworksByCountry = () =>
  createSelector(networksDomain, (networks = []) => {
    if (!networks) return {};

    const countries = {};
    networks.forEach((network) => {
      const { location = {}, ...rest } = network;
      if (!countries[location.country]) countries[location.country] = [];
      countries[location.country].push({ location, ...rest });
    });
    return countries;
  });
