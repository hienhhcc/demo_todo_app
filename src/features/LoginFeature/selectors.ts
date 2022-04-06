import { createSelector } from '@reduxjs/toolkit';

export const selectAuthenticationSlice = (state: any) => state.authentication;

export const selectAuthenticationUserInfo = createSelector(
  selectAuthenticationSlice,
  (authentication) => authentication.userInfo
);

export const selectIsAuthenticated = createSelector(
  selectAuthenticationSlice,
  (authentication) => authentication.isAuthenticated
);

export const selectAuthenticationStatus = createSelector(
  selectAuthenticationSlice,
  (authentication) => authentication.status
);

export const selectAuthenticationError = createSelector(
  selectAuthenticationSlice,
  (authentication) => authentication.error
);
