import { all, takeLatest, fork } from 'redux-saga/effects';
// import { loginAsync, loginSuccessAsync, autoLoginFlow } from './login';
import { loginAsync } from './login';

import * as actionTypes from '../action-types';
// import { logoutAsync, logoutSuccessAsync } from './logout';
export default function* root() {
  return all([
    yield takeLatest(actionTypes.LOGIN, loginAsync),
    // yield takeLatest(actionTypes.LOGIN_SUCCESS, loginSuccessAsync),
    // yield takeLatest(actionTypes.LOGOUT_SUCCESS, logoutSuccessAsync),
    // yield fork(autoLoginFlow),
    // yield takeLatest(actionTypes.LOGOUT, logoutAsync),
  ]);
}
