import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.scss'],
})
export class TaskSummaryComponent implements OnInit {
  @Input() tasks: Task[] = [];
  cost: number = 0;
  subtotal: number = 0;
  profit: number = 0;
  vat: number = 0;

  constructor() { }

  ngOnInit() {
    this.cost = this.tasks.map(task => task.cost).reduce((acc, cur) => acc + cur);
    this.profit = this.tasks.map(task => task.price - task.cost).reduce((acc, cur) => acc + cur);

    this.subtotal = this.cost + this.profit;
    this.vat = this.tasks.map(task => task.price * task.vat).reduce((acc, cur) => acc + cur);
  }

}
