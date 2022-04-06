import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  status: '',
  error: null,
  userInfo: null,
};

export const authenticationSlice = createSlice({
  initialState,
  name: 'authentication',
  reducers: {
    login(state, action) {},
    loginSuccess(state, action) {},
    loginFailed(state, action) {},

    reset(state, action) {
      state.status = '';
      state.error = null;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authenticationSlice;
