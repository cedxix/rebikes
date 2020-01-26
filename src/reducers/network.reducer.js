import {
  FETCH_NETWORKS,
  FETCH_NETWORKS_ERROR,
  FETCH_NETWORKS_SUCCESS,
} from '../actions/actions.constant';

const initialState = {
  networks: [],
  error: {},
  loading: false,
};

export default function networksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NETWORKS:
      return {...state, networks: [], loading: true};
    case FETCH_NETWORKS_SUCCESS:
      return {...state, networks: [...action.networks], loading: false};
    case FETCH_NETWORKS_ERROR:
      return {...state, error: action.error, loading: false};
    default:
      return state;
  }
}
