import {
  FETCH_NETWORKS,
  FETCH_NETWORKS_SUCCESS,
  FETCH_NETWORKS_ERROR
} from './actions.constant';

export const fetchNetworks = () => ({
  type: FETCH_NETWORKS,
});
export const fetchNetworksSuccess = ({ networks }) => ({
  type: FETCH_NETWORKS_SUCCESS,
  networks,
});
export const fetchNetworksError = (error) => ({
  type: FETCH_NETWORKS_ERROR,
  error
});


export default {
  fetchNetworks,
  fetchNetworksSuccess,
  fetchNetworksError
};