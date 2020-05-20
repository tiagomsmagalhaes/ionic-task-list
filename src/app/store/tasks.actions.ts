import { createAction } from '@ngrx/store';

export const deleteTask = createAction('[Task List] Delete Taskt');
export const createTask = createAction('[Add Task Component] Create');
export const editTask = createAction('[Edit Task Component] Edit');
// export const reset = createAction('[Task List] Reset');