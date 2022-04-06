import { call, put, all, takeLatest } from 'redux-saga/effects';

import { fetchTodoAPI, addTodoAPI } from 'services/index';

import { actions } from './slice';

//! Fetch todo
function* watchFetchTodo() {
  yield takeLatest(actions.fetchTodo, fetchTodoTask);
}

function* fetchTodoTask(action: any) {
  const { responseData, error } = yield call(fetchTodoAPI, action.payload);
  if (responseData) {
    yield put(actions.fetchTodoSuccess(responseData));
  } else {
    yield put(actions.fetchTodoFailed(error));
  }
}

//! Add todo
function* watchAddTodo() {
  yield takeLatest(actions.addTodo, addTodoTask);
}

function* addTodoTask(action: any) {
  const { responseData, error } = yield call(addTodoAPI, action.payload);
  if (responseData) {
    yield put(actions.addTodoSuccess(responseData));
  } else {
    yield put(actions.addTodoFailed(error));
  }
}

export default function* defaultSaga() {
  yield all([watchFetchTodo(), watchAddTodo()]);
}
