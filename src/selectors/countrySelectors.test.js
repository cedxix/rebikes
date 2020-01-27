import { makeSelectCountryCities, countryDomain } from './countrySelectors';
const mockedState = {
  country: {
    selectedCountryCode: 'CA',
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
          "cities": [
            {
              "company": [
                "Nextbike GmbH"
              ],
              "href": "/v2/networks/nextbike-victoria",
              "id": "nextbike-victoria",
              "location": {
                "city": "Victoria",
                "country": "CA",
                "latitude": 48.4298,
                "longitude": -123.361
              },
              "name": "Nextbike"
            }
          ],
          "countryCode": "CA"
        });
      });
    });
  });
});
