import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';
import { StepperComponent } from './stepper/stepper.component';
import { SharedModule } from '../shared.module';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    ContactComponent,
    StepperComponent,
    TaskListComponent,
    TaskSummaryComponent,
  ],
  exports: [
    ContactComponent,
    StepperComponent,
    TaskListComponent,
    TaskSummaryComponent
  ]
})
export class ComponentsModule {}
