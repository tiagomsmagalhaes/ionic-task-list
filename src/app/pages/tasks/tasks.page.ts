import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  tasks: Task[];
  tasks$: Observable<Task[]>;


  constructor(
    private taskService: TaskService
  ) {

  }

  ngOnInit() {

    this.tasks = [
      {
        title: 'Plaster living Room',
        time: 5,
        unit: 'hours',
        vat: 0.2,
        cost: 50,
        price: 120
      },
      {
        title: 'Fix boiler',
        time: 10,
        unit: 'hours',
        vat: 0.2,
        cost: 100,
        price: 240
      },
      {
        title: 'Paint walls',
        time: 5,
        unit: 'hours',
        vat: 0.2,
        cost: 50,
        price: 120
      },
    ]
  }

}
