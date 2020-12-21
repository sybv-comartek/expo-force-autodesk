// import * as apis from '@modules/Auth/services/apis';
// import { LoginAction, LoginActionSuccess, LOGOUT } from '../action-types';
import { LoginAction, LoginActionSuccess } from '../action-types';
import { put } from 'redux-saga/effects';
// import { loginError, loginSuccess } from '../actions';
import { loginError } from '../actions';
export function* loginAsync(action: LoginAction) {
  try {
    console.log("login success!")
    // const payload = yield apis.adminLogin(action.payload.username, action.payload.password);
    // yield put(loginSuccess(payload.adminLogin));
  } catch (error) {
    yield put(loginError(error));
  }
}