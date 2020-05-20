import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    TaskListComponent,
    TaskSummaryComponent
  ],
  exports: [
    TaskListComponent,
    TaskSummaryComponent
  ]
})
export class ComponentsModule {}
