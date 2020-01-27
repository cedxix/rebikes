import { networkActions } from './../actions';
import networksReducer from './network.reducer';

const initialState = {
  networks: [],
  error: {},
  loading: false,
};

describe('network reducer', () => {
  test('it should update store when fetchNetwork', () => {
    expect(
      networksReducer(initialState, networkActions.fetchNetworks()),
    ).toEqual({
      error: {},
      networks: [],
      loading: true,
    });
  });
  test('it should update store when fetchNetworkSuccess', () => {
    const response = {
      networks: [
        {
          company: ['ЗАО «СитиБайк»'],
          href: '/v2/networks/velobike-moscow',
          id: 'velobike-moscow',
          location: {
            city: 'Moscow',
            country: 'RU',
            latitude: 55.75,
            longitude: 37.616667,
          },
          name: 'Velobike',
        },
        {
          company: ['Gobike A/S'],
          href: '/v2/networks/bycyklen',
          id: 'bycyklen',
          location: {
            city: 'Copenhagen',
            country: 'DK',
            latitude: 55.673582,
            longitude: 12.564984,
          },
          name: 'Bycyklen',
        },
        {
          company: ['Gobike A/S'],
          href: '/v2/networks/nu-connect',
          id: 'nu-connect',
          location: {
            city: 'Utrecht',
            country: 'NL',
            latitude: 52.117,
            longitude: 5.067,
          },
          name: 'Nu-Connect',
        },
      ],
    };
    expect(
      networksReducer(
        initialState,
        networkActions.fetchNetworksSuccess(response),
      ),
    ).toEqual({
      error: {},
      networks: response.networks,
      loading: false,
    });
  });
  test('it should update store when fetchNetworkError', () => {
    const error = new Error('I am an error');
    expect(
      networksReducer(initialState, networkActions.fetchNetworksError(error)),
    ).toEqual({
      error,
      networks: [],
      loading: false,
    });
  });
});
