import { createSlice } from '@reduxjs/toolkit';
import { ACTION_STATUS } from '../../constants';

const initialState = {
  status: '',
  error: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    register(state, action) {
      state.error = null;
      state.status = ACTION_STATUS.PENDING;
      return state;
    },
    registerSuccess(state, action) {
      state.status = ACTION_STATUS.SUCCESS;
      return state;
    },
    registerFailed(state, action) {
      state.error = action.payload;
      state.status = ACTION_STATUS.FAILED;
      return state;
    },
    reset(state, action) {
      return initialState;
    },
  },
});

export const { actions, reducer, name: sliceKey } = registerSlice;
