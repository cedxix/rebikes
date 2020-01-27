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
    loading: false,
  },
};

describe('Given countrySelector', () => {
  test('It should select networks domain', () => {
    expect(networksDomain(mockedState)).toEqual(mockedState.networks.networks);
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
          DK: [
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
          ],
          NL: [
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
          RU: [
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
          ],
        });
      });
    });
  });
});
