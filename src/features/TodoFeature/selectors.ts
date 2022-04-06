import { createSelector } from '@reduxjs/toolkit';

export const selectTodoSlice = (state: any) => state.todo;

export const selectTodoItems = createSelector(
  selectTodoSlice,
  (todoSlice) => todoSlice.items
);

export const selectSingleTodoItem = createSelector(
  selectTodoSlice,
  (todoSlice) => todoSlice.singleTodo
);

export const selectAddStatus = createSelector(
  selectTodoSlice,
  (todoSlice) => todoSlice.addStatus
);

export const selectEditStatus = createSelector(
  selectTodoSlice,
  (todoSlice) => todoSlice.editStatus
);
