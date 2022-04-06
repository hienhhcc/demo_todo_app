import { call, put, all, takeLatest } from 'redux-saga/effects';

import { registerAPI } from 'services/index';

import { actions } from './slice';

function* watchRegister() {
  yield takeLatest(actions.register, registerTask);
}

function* registerTask(action: any) {
  const { responseData, error } = yield call(registerAPI, action.payload);
  if (responseData) {
    yield put(actions.registerSuccess(responseData));
  } else {
    yield put(actions.registerFailed(error));
  }
}

export default function* defaultSaga() {
  yield all([watchRegister()]);
}
