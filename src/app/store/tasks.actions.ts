import { Action } from '@ngrx/store';
import { Task } from '../interfaces/task';

export enum TaskActionTypes {
    ADD_TASK = '[TASK] Add Task',
    EDIT_TASK = '[TASK] Edit Task',
    DELETE_TASK = '[TASK] Delete Task',
}

export class AddTaskAction implements Action {
    readonly type = TaskActionTypes.ADD_TASK;

    constructor(public task: Task) {}
}
export class EditTaskAction implements Action {
    readonly type = TaskActionTypes.EDIT_TASK;

    constructor(public task: Task) {}
}
export class DeleteTaskAction implements Action {
    readonly type = TaskActionTypes.DELETE_TASK;

    constructor(public task: Task) {}
}


export type TaskAction = AddTaskAction|EditTaskAction|DeleteTaskAction;
