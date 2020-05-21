import { Task } from "../interfaces/task";
import { TaskActionTypes, TaskAction } from './tasks.actions';

const initialState: Task[] = [
    {
        id: 1,
        title: 'Plaster living Room',
        time: 5,
        unit: 'hours',
        vat: 0.2,
        cost: 50,
        price: 120
      },
      {
        id: 2,
        title: 'Fix boiler',
        time: 10,
        unit: 'hours',
        vat: 0.2,
        cost: 100,
        price: 240
      },
      {
        id: 3,
        title: 'Paint walls',
        time: 5,
        unit: 'hours',
        vat: 0.2,
        cost: 50,
        price: 120
      },
];



export function TaskReducer(state: Task[] = initialState, action: TaskAction) {
    switch (action.type) {
        case TaskActionTypes.ADD_TASK:
            return [...state, action.task];
    
        default:
            return state;
    }
}