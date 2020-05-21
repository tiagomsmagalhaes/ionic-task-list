import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StepperComponent),
      multi: true
    }
  ]
})
export class StepperComponent implements OnInit, ControlValueAccessor {
  control: FormControl;

  private propagateChange : any = () => {};

  constructor() { }

  ngOnInit() {
    this.control = new FormControl(0, Validators.min(1))
  }

  writeValue(value: number) {
    if (value) {
      this.control.setValue(value)
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }

  increment() {
    if (this.control.value) {
      this.control.setValue(parseInt(this.control.value, 10) + 1)
    } else {
      this.control.setValue(1)
      
    }

    this.propagateChange(this.control.value);
  }

  decrement() {

    if (this.control.value) {
      this.control.setValue(parseInt(this.control.value, 10) - 1)
      
    } else {
      this.control.setValue(1);
    }
    this.propagateChange(this.control.value);
  }


}
