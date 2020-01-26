import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_NETWORKS } from './../actions/actions.constant';
import {
  fetchNetworksError,
  fetchNetworksSuccess
} from './../actions/network.actions'
import cityBikesApi from './../api/cityBikesApi';

import defaultSaga, { fetchNetworksSaga } from './network.saga'

describe('networkSaga', () => {
  test('defaultSaga', () => {
    const generator = defaultSaga();
    expect(generator.next().value).toEqual(takeLatest(FETCH_NETWORKS, fetchNetworksSaga))
    expect(generator.next().value).toBeUndefined();
  });
  describe('fetchNetworksSaga', () => {
    test('it should fetchNetworksSaga successfully', () => {
      const data = {
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

      const generator = fetchNetworksSaga();
      expect(generator.next().value).toEqual(call(cityBikesApi.fetchNetworks));
      expect(generator.next({ data }).value).toEqual(put(fetchNetworksSuccess(data)));
      expect(generator.next().value).toBeUndefined();
    });
    test('it should handle failure when fetching networks', () => {
      const error = new Error('Fetch error');

      const generator = fetchNetworksSaga();
      expect(generator.next().value).toEqual(call(cityBikesApi.fetchNetworks));
      expect(generator.throw(error).value).toEqual(put(fetchNetworksError(error)));
      expect(generator.next().value).toBeUndefined();
    });
  });
});