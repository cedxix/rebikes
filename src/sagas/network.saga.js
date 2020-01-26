import { takeLatest } from 'redux-saga/effects';
import { FETCH_NETWORKS } from './../actions/actions.constant';

export default function* defaultSaga() {
  yield takeLatest(FETCH_NETWORKS, fetchNetworksSaga);
};

export function* fetchNetworksSaga(action) {
  console.log('fetchNetworksSaga', action);
}