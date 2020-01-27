import { SELECT_COUNTRY } from './actions.constant';

export const selectCountry = (countryCode) => ({
  type: SELECT_COUNTRY,
  countryCode,
});

export default {
  selectCountry,
};
