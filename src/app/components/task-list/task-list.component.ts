import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[] = [];
  constructor() { }

  ngOnInit() {}

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
