import { createSlice } from '@reduxjs/toolkit';
import { ACTION_STATUS } from '../../constants';

interface ITodo {
  _id: string;
  content: string;
  status: string;
}

interface InitialState {
  items: ITodo[];
  singleTodo: ITodo | null;
  fetchSingleTodoStatus: string;
  addStatus: string;
  fetchTodosStatus: string;
  editStatus: string;
  deleteStatus: string;
  error: any;
}

const initialState: InitialState = {
  items: [],
  singleTodo: null,
  fetchSingleTodoStatus: '',
  addStatus: '',
  fetchTodosStatus: '',
  editStatus: '',
  deleteStatus: '',
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
      state.fetchTodosStatus = ACTION_STATUS.PENDING;
      return state;
    },
    fetchTodoSuccess(state, action) {
      state.fetchTodosStatus = ACTION_STATUS.SUCCESS;
      state.items = action.payload;
      return state;
    },
    fetchTodoFailed(state, action) {
      state.addStatus = ACTION_STATUS.FAILED;
      return state;
    },
    fetchSingleTodo(state, action) {
      state.fetchSingleTodoStatus = ACTION_STATUS.PENDING;
      return state;
    },
    fetchSingleTodoSuccess(state, action) {
      state.fetchSingleTodoStatus = ACTION_STATUS.SUCCESS;
      state.singleTodo = action.payload[0];
      return state;
    },
    fetchSingleTodoFailed(state, action) {
      state.fetchSingleTodoStatus = ACTION_STATUS.FAILED;
      return state;
    },
    editTodo(state, action) {
      state.editStatus = ACTION_STATUS.PENDING;
      return state;
    },
    editTodoSuccess(state, action) {
      state.editStatus = ACTION_STATUS.SUCCESS;
      const todoIndex = state.items.findIndex(
        (item: any) => item.id === action.payload.id
      );
      state.items[todoIndex] = action.payload;
      return state;
    },
    editTodoFailed(state, action) {
      state.editStatus = ACTION_STATUS.FAILED;
      return state;
    },
    resetEditStatus(state, action) {
      state.editStatus = '';
      return state;
    },
    deleteTodo(state, action) {
      state.deleteStatus = ACTION_STATUS.PENDING;
      return state;
    },
    deleteTodoSuccess(state, action) {
      console.log(action.payload);
      state.deleteStatus = ACTION_STATUS.SUCCESS;
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload.todoId
      );
      return state;
    },
    deleteTodoFailed(state, action) {
      state.deleteStatus = ACTION_STATUS.FAILED;
      return state;
    },
  },
});

export const { actions, reducer, name: sliceKey } = todoSlice;
