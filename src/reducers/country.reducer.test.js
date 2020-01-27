import { countryActions } from './../actions';

import countryReducer from './country.reducer';

const initialState = {
  selectedCountryCode: null,
  loading: false,
};

describe('network reducer', () => {
  test('it should update store when fetchNetwork', () => {
    expect(
      countryReducer(initialState, countryActions.selectCountry('BE')),
    ).toEqual({
      selectedCountryCode: 'BE',
      loading: false,
    });
  });
});
