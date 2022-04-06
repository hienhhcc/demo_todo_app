import { createSelector } from '@reduxjs/toolkit';

export const selectRegisterSlice = (state: any) => state.register;

export const selectRegisterStatus = createSelector(
  selectRegisterSlice,
  (regiterSlice) => regiterSlice.status
);

export const selectRegisterError = createSelector(
  selectRegisterSlice,
  (regiterSlice) => regiterSlice.error
);
