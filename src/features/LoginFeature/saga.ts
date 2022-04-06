import { call, put, all, takeLatest } from 'redux-saga/effects';

import { loginAPI } from '../../services';

import { actions } from './slice';

//* Login
function* watchLogin() {
  yield takeLatest(actions.login, loginTask);
}

function* loginTask(action: any) {
  const { responseData, error } = yield call(loginAPI, action.payload);

  if (responseData && responseData.length !== 0) {
    yield put(actions.loginSuccess(responseData));
  } else {
    yield put(actions.loginFailed(error));
  }
}

export default function* defaultSaga() {
  yield all([watchLogin()]);
}
