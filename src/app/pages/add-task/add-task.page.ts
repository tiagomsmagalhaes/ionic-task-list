import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddTaskAction, EditTaskAction } from 'src/app/store/tasks.actions';
import { Task } from 'src/app/interfaces/task';

import { filter, tap, switchMap, map } from "rxjs/operators";


import { v4 as uuid } from "uuid";
import { ActivatedRoute, Router } from '@angular/router';
import { getTaskById } from 'src/app/store/task.selectors';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  form: FormGroup;
  edit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [Validators.required],
      title: [null, Validators.required],
      cost: [null],
      price: [null],
      vat: [null],
      time: [null],
      unit: null,
      assignee: null
    })

    this.route.params.pipe(
      filter(params => !!Object.keys(params).length),
      tap(() => this.edit = true),
      switchMap(params => this.store.select(getTaskById(params.id))),
      // tap(task => console.log(task)),
      map(task => ({...task, vat: task.vat.toString()}))
    ).subscribe(task => this.form.patchValue(task))
  }

  createTask() {

    if (this.edit) {
      const id = this.form.get('id').value;
      const task: Task = {
        id: this.form.get('id').value,
        title: this.form.get('title').value,
        cost: +this.form.get('cost').value,
        price: +this.form.get('price').value,
        vat: +this.form.get('vat').value,
        time: +this.form.get('time').value,
        unit: this.form.get('unit').value,
        assignee: this.form.get('assignee').value,
      }
      this.store.dispatch(new EditTaskAction(id, task))
    } else {
        const task: Task = {
          id: uuid(),
          title: this.form.get('title').value,
          cost: +this.form.get('cost').value,
          price: +this.form.get('price').value,
          vat: +this.form.get('vat').value,
          time: +this.form.get('time').value,
          unit: this.form.get('unit').value,
          assignee: this.form.get('assignee').value,
        }
    
        this.store.dispatch(new AddTaskAction(task))
    }

    this.router.navigate(['..'])
  }
}
