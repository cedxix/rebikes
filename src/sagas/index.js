import { all } from 'redux-saga/effects';
import networkSaga from './network.saga';

export default function* rootSaga() {
  yield all([networkSaga()]);
}
