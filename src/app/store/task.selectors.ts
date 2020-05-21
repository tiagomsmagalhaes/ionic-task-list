import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Task } from '../interfaces/task';



const getAllTasks = createFeatureSelector('tasks');


export const getTaskById = id =>  createSelector(
    getAllTasks,
    (tasks: Task[]) => tasks.find(task => task.id === id)
)