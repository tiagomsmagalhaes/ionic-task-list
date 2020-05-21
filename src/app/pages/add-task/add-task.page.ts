import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  form: FormGroup;

  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['null', Validators.required],
      cost: [123],
      price: [null],
      vat: [null],
      time: [1],
      unit: null,
      assignee: null
    })
  }

  createTask() {
    console.log(this.form.value)

    // this.store.dispatch()
  }



}
