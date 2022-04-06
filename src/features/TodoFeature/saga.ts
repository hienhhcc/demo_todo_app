import { call, put, all, takeLatest } from 'redux-saga/effects';

import {
  fetchTodoAPI,
  addTodoAPI,
  fetchSingleTodoAPI,
  editTodoAPI,
  deleteTodoAPI,
} from 'services/index';

import { actions } from './slice';

//! Fetch todos
function* watchFetchTodos() {
  yield takeLatest(actions.fetchTodo, fetchTodosTask);
}

function* fetchTodosTask(action: any) {
  const { responseData, error } = yield call(fetchTodoAPI, action.payload);
  if (responseData) {
    yield put(actions.fetchTodoSuccess(responseData));
  } else {
    yield put(actions.fetchTodoFailed(error));
  }
}

//! Fetch single todo
function* watchFetchSingleTodo() {
  yield takeLatest(actions.fetchSingleTodo, fetchSingleTodoTask);
}

function* fetchSingleTodoTask(action: any) {
  const { responseData, error } = yield call(
    fetchSingleTodoAPI,
    action.payload
  );
  if (responseData) {
    yield put(actions.fetchSingleTodoSuccess(responseData));
  } else {
    yield put(actions.fetchSingleTodoFailed(error));
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

//! Edit todo
function* watchEditTodo() {
  yield takeLatest(actions.editTodo, editTodoTask);
}

function* editTodoTask(action: any) {
  const { responseData, error } = yield call(editTodoAPI, action.payload);
  if (responseData) {
    yield put(actions.editTodoSuccess(responseData));
  } else {
    yield put(actions.editTodoFailed(error));
  }
}

//! Delete todo
function* watchDeleteTodo() {
  yield takeLatest(actions.deleteTodo, deleteTodoTask);
}

function* deleteTodoTask(action: any) {
  const { responseData, error } = yield call(deleteTodoAPI, action.payload);
  console.log(responseData);
  if (responseData) {
    yield put(
      actions.deleteTodoSuccess({
        ...responseData,
        todoId: action.payload.todoId,
      })
    );
  } else {
    yield put(actions.deleteTodoFailed(error));
  }
}

export default function* defaultSaga() {
  yield all([
    watchFetchTodos(),
    watchFetchSingleTodo(),
    watchAddTodo(),
    watchEditTodo(),
    watchDeleteTodo(),
  ]);
}
