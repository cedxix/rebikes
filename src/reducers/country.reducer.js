import { SELECT_COUNTRY } from '../actions/actions.constant';

const initialState = {
  selectedCountryCode: null,
  loading: false,
};

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_COUNTRY:
      return {
        ...state,
        selectedCountryCode: action.countryCode,
        loading: false,
      };
    default:
      return state;
  }
}
