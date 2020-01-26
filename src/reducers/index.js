import { combineReducers } from 'redux';
import networksReducer from './network.reducer';

export default combineReducers({
  networks: networksReducer,
});