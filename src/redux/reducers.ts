import { combineReducers } from 'redux';
import auth, { AuthModuleState } from '../scenes/auth/login/redux/reducers';

export interface RootState {
  auth: AuthModuleState;
}

export default combineReducers<RootState>({
  auth,
});
