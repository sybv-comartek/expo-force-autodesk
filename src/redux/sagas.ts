import { all, take } from 'redux-saga/effects';
import authSaga from '@modules/Auth/redux/sagas';
import articleDataSaga from '@modules/Masterdata/redux/sagas';
import masterDataSaga from '@modules/ContentManagement/redux/sagas';
import * as commonSaga from './common-saga';
import { APP_STARTED } from './actions';
import lawyersSagas from '@modules/Lawyermanagement/redux/sagas';
import qaSagas from '@modules/QAManagement/redux/sagas';

export default function* rootSaga() {
  yield take(APP_STARTED);
  yield all([
    authSaga(),
    articleDataSaga(),
    commonSaga.checkErrorAsync(),
    commonSaga.checkCreateErrorAsync(),
    lawyersSagas(),
    masterDataSaga(),
    qaSagas(),
  ]);
}
