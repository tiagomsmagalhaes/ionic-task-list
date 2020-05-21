import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.model';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.scss'],
})
export class TaskSummaryComponent implements OnInit {
  show: boolean = false;
  cost: number = 0;
  subtotal: number = 0;
  profit: number = 0;
  vat: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(store => store.tasks)
    .pipe(
      // filter(tasks => !!tasks.length)
    ).subscribe(tasks => {
      if (tasks.length) {
        this.cost = tasks.map(task => task.cost).reduce((acc, cur) => acc + cur);
        this.profit = tasks.map(task => task.price - task.cost).reduce((acc, cur) => acc + cur);
        
        this.subtotal = this.cost + this.profit;
        this.vat = tasks.map(task => task.price * task.vat).reduce((acc, cur) => acc + cur);
        this.show = true;
      } else {
        this.show = false;
      }
    })
  }
}
