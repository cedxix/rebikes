import React from 'react';

import {
  fetchNetworks,
  fetchNetworksError,
  fetchNetworksSuccess,
} from './network.actions';
import {
  FETCH_NETWORKS,
  FETCH_NETWORKS_SUCCESS,
  FETCH_NETWORKS_ERROR
} from './actions.constant';

describe('network action', () => {
  test('it should fetchNetwork', () => {
    expect(fetchNetworks()).toEqual({
      type: FETCH_NETWORKS,
    });
  });
  test('it should fetchNetworkSuccess', () => {
    const response = {
      networks: [
        {
          'company': [
            'ЗАО «СитиБайк»',
          ],
          'href': '/v2/networks/velobike-moscow',
          'id': 'velobike-moscow',
          'location': {
            'city': 'Moscow',
            'country': 'RU',
            'latitude': 55.75,
            'longitude': 37.616667,
          },
          'name': 'Velobike',
        },
        {
          'company': [
            'Gobike A/S',
          ],
          'href': '/v2/networks/bycyklen',
          'id': 'bycyklen',
          'location': {
            'city': 'Copenhagen',
            'country': 'DK',
            'latitude': 55.673582,
            'longitude': 12.564984,
          },
          'name': 'Bycyklen',
        },
        {
          'company': [
            'Gobike A/S',
          ],
          'href': '/v2/networks/nu-connect',
          'id': 'nu-connect',
          'location': {
            'city': 'Utrecht',
            'country': 'NL',
            'latitude': 52.117,
            'longitude': 5.067,
          },
          'name': 'Nu-Connect',
        },
      ],
    };
    expect(fetchNetworksSuccess(response)).toEqual({
      type: FETCH_NETWORKS_SUCCESS,
      networks: response.networks,
    });
  });
  test('it should fetchNetworkError', () => {
    const error = new Error('I am an error');
    expect(fetchNetworksError(error)).toEqual({
      type: FETCH_NETWORKS_ERROR,
      error,
    });
  });
});

