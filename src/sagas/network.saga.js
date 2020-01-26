import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_NETWORKS } from './../actions/actions.constant';
import {
  fetchNetworksError,
  fetchNetworksSuccess
} from './../actions/network.actions'
import cityBikesApi from './../api/cityBikesApi';

export default function* defaultSaga() {
  yield takeLatest(FETCH_NETWORKS, fetchNetworksSaga);
};

export function* fetchNetworksSaga() {
  try {
    const { data = {} } = yield call(cityBikesApi.fetchNetworks);
    yield put(fetchNetworksSuccess(data));
  }catch (error){
    yield put(fetchNetworksError(error))
  }
}