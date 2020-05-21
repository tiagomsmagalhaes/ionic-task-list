import { Action } from '@ngrx/store';
import { Task } from '../interfaces/task';

export enum TaskActionTypes {
    ADD_TASK = '[TASK] Add Task',
    EDIT_TASK = '[TASK] Edit Task',
    DELETE_TASK = '[TASK] Delete Task',
}

export class AddTaskAction implements Action {
    readonly type = TaskActionTypes.ADD_TASK;

    constructor(public payload: Task) {}
}
export class EditTaskAction implements Action {
    readonly type = TaskActionTypes.EDIT_TASK;

    constructor(public id: string, public payload: Task) {}
}
export class DeleteTaskAction implements Action {
    readonly type = TaskActionTypes.DELETE_TASK;

    constructor(public payload: string) {}
}


export type TaskAction = AddTaskAction|EditTaskAction|DeleteTaskAction;
