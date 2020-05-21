import { Task } from "../interfaces/task";
import { TaskActionTypes, TaskAction } from './tasks.actions';

import { v4 as uuid } from "uuid";


const initialState: Task[] = [
    // {
    //     id: '32652333-9f72-41cc-ada4-a1d67c1c2203',
    //     title: 'Plaster living Room',
    //     time: 5,
    //     unit: 'hours',
    //     vat: 0.2,
    //     cost: 50,
    //     price: 120
    //   },
    //   {
    //     id: '868d6cae-fa26-4796-8b64-c07dbd9d5486',
    //     title: 'Fix boiler',
    //     time: 10,
    //     unit: 'hours',
    //     vat: 0.2,
    //     cost: 100,
    //     price: 240
    //   },
    //   {
    //     id: '81a0d46a-7b17-4209-bbca-65a5e399a2b3',
    //     title: 'Paint walls',
    //     time: 5,
    //     unit: 'hours',
    //     vat: 0.2,
    //     cost: 50,
    //     price: 120
    //   },
];



export function TaskReducer(state: Task[] = initialState, action: TaskAction) {
    switch (action.type) {
        case TaskActionTypes.ADD_TASK:
            return [...state, action.payload];
        case TaskActionTypes.DELETE_TASK:
            return state.filter(task => task.id !== action.payload);
        case TaskActionTypes.EDIT_TASK:
            return [...state.filter(task => task.id !== action.id), action.payload];
    
        default:
            return state;
    }
}