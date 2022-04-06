import { combineReducers } from '@reduxjs/toolkit';

import { reducer as authenticationReducer } from 'features/LoginFeature/slice';

export const createReducer = (injectedReducers = {}) => {
  return combineReducers({
    authentication: authenticationReducer,
    ...injectedReducers,
  });
};
