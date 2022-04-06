import { createSelector } from '@reduxjs/toolkit';

export const selectTodoSlice = (state: any) => state.todo;

export const selectTodoItems = createSelector(
  selectTodoSlice,
  (todoSlice) => todoSlice.items
);

export const selectAddStatus = createSelector(
  selectTodoSlice,
  (todoSlice) => todoSlice.addStatus
);
