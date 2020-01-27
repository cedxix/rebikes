import { makeSelectCountryCities, countryDomain } from './countrySelectors';
const mockedState = {
  country: {
    selectedCountryCode: 'RU',
    loading: false,
  },
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
  test('Should select country domain', () => {
    expect(countryDomain(mockedState)).toEqual(mockedState.country);
  });
  describe('makeSelectNetworksByCountry', () => {
    describe('Given there are no country selected', () => {
      test('It should return empty list', () => {
        const country = { ...mockedState.country, selectedCountryCode: null };
        expect(makeSelectCountryCities()({ ...mockedState, country })).toEqual(
          {},
        );
      });
    });
    describe('Given there are country selected', () => {
      test('It should return the cities for that country', () => {
        expect(makeSelectCountryCities()({ ...mockedState })).toEqual({
          cities: [
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
          countryCode: 'RU',
        });
      });
    });
  });
});
