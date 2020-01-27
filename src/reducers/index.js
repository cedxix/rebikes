import { combineReducers } from 'redux';
import networksReducer from './network.reducer';
import countryReducer from './country.reducer';

export default combineReducers({
  networks: networksReducer,
  country: countryReducer,
});
