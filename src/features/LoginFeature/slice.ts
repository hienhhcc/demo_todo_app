import { createSlice } from '@reduxjs/toolkit';
import { ACTION_STATUS } from '../../constants';

interface IInitialState {
  isAuthenticated: boolean;
  isLoading: boolean;
  status: string;
  error: null | Error | string;
  userInfo: {
    id: number;
    username: string;
  } | null;
}

const initialState: IInitialState = {
  isAuthenticated: false,
  isLoading: false,
  status: '',
  error: null,
  userInfo: null,
};

export const authenticationSlice = createSlice({
  initialState,
  name: 'authentication',
  reducers: {
    login(state, action) {
      state.status = ACTION_STATUS.PENDING;
      state.isLoading = true;
      return state;
    },
    loginSuccess(state, action) {
      state.status = ACTION_STATUS.SUCCESS;
      state.isLoading = false;
      state.error = null;
      state.userInfo = {
        id: action.payload[0].id,
        username: action.payload[0].username,
      };
      state.isAuthenticated = true;
      return state;
    },
    loginFailed(state, action) {
      state.status = ACTION_STATUS.FAILED;
      state.isLoading = false;
      state.error = 'Wrong username or password';
      return state;
    },
    reset(state, action) {
      state.status = '';
      state.error = null;
    },
    clearError(state, action) {
      state.error = null;
      return state;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authenticationSlice;
