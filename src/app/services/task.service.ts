import { Injectable } from '@angular/core';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Task } from '../interfaces/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService extends EntityCollectionServiceBase<Task> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Task', serviceElementsFactory)
  }
}
