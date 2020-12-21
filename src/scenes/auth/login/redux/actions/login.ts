import { LoginActionTypes, LOGIN, LoginInput, LOGIN_ERROR, LOGIN_SUCCESS, UserInfo } from '../action-types/login';
export const login = (payload: LoginInput): LoginActionTypes => ({
  type: LOGIN,
  payload,
});

export const loginError = (payload: string): LoginActionTypes => ({
  type: LOGIN_ERROR,
  payload,
});

export const loginSuccess = (payload: UserInfo): LoginActionTypes => ({
  type: LOGIN_SUCCESS,
  payload,
});

// export interface LoginSuccessAction extends ActionBase<LoginResponse> { }
// export const loginSuccess = (payload: LoginResponse): LoginSuccessAction => ({
//   type: typeof LOGIN_SUCCESS,
//   payload,
// });
