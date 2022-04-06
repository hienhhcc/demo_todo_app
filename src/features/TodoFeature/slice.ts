import { createSlice } from '@reduxjs/toolkit';
import { ACTION_STATUS } from '../../constants';

interface ITodo {
  _id: string;
  content: string;
  status: string;
}

interface InitialState {
  items: ITodo[];
  addStatus: string;
  fetchStatus: string;
  editStatus: string;
  error: any;
}

const initialState: InitialState = {
  items: [],
  addStatus: '',
  fetchStatus: '',
  editStatus: '',
  error: null,
};

export const todoSlice = createSlice({
  initialState,
  name: 'todo',
  reducers: {
    addTodo(state, action) {
      state.addStatus = ACTION_STATUS.PENDING;
      return state;
    },
    addTodoSuccess(state, action) {
      console.log(action.payload);
      state.addStatus = ACTION_STATUS.SUCCESS;
      return state;
    },
    addTodoFailed(state, action) {
      state.addStatus = ACTION_STATUS.FAILED;
      return state;
    },
    resetAddStatus(state, action) {
      state.addStatus = '';
      return state;
    },
    fetchTodo(state, action) {
      state.fetchStatus = ACTION_STATUS.PENDING;
      return state;
    },
    fetchTodoSuccess(state, action) {
      state.fetchStatus = ACTION_STATUS.SUCCESS;
      state.items = action.payload;
      return state;
    },
    fetchTodoFailed(state, action) {
      state.addStatus = ACTION_STATUS.FAILED;
      return state;
    },
    editTodo(state, action) {},
    editTodoSuccess(state, action) {},
    editTodoFailed(state, action) {},
    deleteTodo(state, action) {},
    deleteTodoSuccess(state, action) {},
    deleteTodoFailed(state, action) {},
  },
});

export const { actions, reducer, name: sliceKey } = todoSlice;
