import { all, take } from 'redux-saga/effects';
import authSaga from '../scenes/auth/login/redux/sagas';
import { APP_STARTED } from './actions';

export default function* rootSaga() {
  yield take(APP_STARTED);
  yield all([
    authSaga(),
  ]);
}
