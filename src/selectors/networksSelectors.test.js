import {
  makeSelectNetworksByCountry,
  networksDomain,
} from './networkSelectors';

const mockedState = {
  networks: {
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
        company: ['Nextbike GmbH'],
        href: '/v2/networks/nextbike-victoria',
        id: 'nextbike-victoria',
        location: {
          city: 'Victoria',
          country: 'CA',
          latitude: 48.4298,
          longitude: -123.361,
        },
        name: 'Nextbike',
      },
    ],
    loading: false,
  },
};

describe('Given countrySelector', () => {
  test('It should select networks domain', () => {
    expect(networksDomain(mockedState)).toEqual(mockedState.networks);
  });

  describe('makeSelectNetworksByCountry', () => {
    describe('Given there are no networks fetched', () => {
      test('It should return empty list', () => {
        expect(makeSelectNetworksByCountry()({})).toEqual({});
      });
    });
    describe('Given there are list of networks fetched', () => {
      test('It should group networks by country', () => {
        expect(makeSelectNetworksByCountry()(mockedState)).toEqual({
          CA: [
            {
              company: ['Nextbike GmbH'],
              href: '/v2/networks/nextbike-victoria',
              id: 'nextbike-victoria',
              location: {
                city: 'Victoria',
                country: 'CA',
                latitude: 48.4298,
                longitude: -123.361,
              },
              name: 'Nextbike',
            },
          ],
        });
      });
    });
  });
});
