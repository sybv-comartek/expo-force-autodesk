import * as apis from '../../api/index';
// import { LoginAction, LoginActionSuccess, LOGOUT } from '../action-types';
import { LoginAction, LoginActionSuccess } from '../action-types';
import { put } from 'redux-saga/effects';
import { loginError, loginSuccess } from '../actions';
export function* loginAsync(action: LoginAction) {
  try {
    const payload = yield apis.login(action.payload);
    // yield put(loginSuccess(payload.adminLogin));
    console.log(payload)
  } catch (error) {
    yield put(loginError(error));
  }
}