import { selectCountry } from './country.actions';
import { SELECT_COUNTRY } from './actions.constant';

describe('country action', () => {
  test('It should select country', () => {
    const countryCode = 'FR';
    expect(selectCountry(countryCode)).toEqual({
      type: SELECT_COUNTRY,
      countryCode,
    });
  });
});
