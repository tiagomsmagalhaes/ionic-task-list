import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.model';
import { DeleteTaskAction } from 'src/app/store/tasks.actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(
    private store: Store<AppState> 
  ) { }

  ngOnInit() {
    this.tasks$ = this.store.select(store => store.tasks);
  }

  deleteTask(task: Task) {
    // this.tasks.splice(index, 1);
    // this.taskService.delete(task)

    // this.store.dispatch(new DeleteTaskAction(task))
  }

}
