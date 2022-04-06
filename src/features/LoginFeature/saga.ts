import { call, put, all, takeLatest } from 'redux-saga/effects';
import { loginAPI } from '../../services';

import { actions } from './slice';

//* Login
function* loginWatcher() {
  yield takeLatest(actions.login, loginTask);
}

function* loginTask(action: any) {
  const { response, error } = yield call(loginAPI, action.payload);
  if (response) {
    yield put(actions.loginSuccess(response));
  } else {
    yield put(actions.loginFailed(error));
  }
}

export default function* defaultSaga() {
  yield all([loginWatcher]);
}
