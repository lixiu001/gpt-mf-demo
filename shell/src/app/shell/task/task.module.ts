import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DetaillComponent } from './detaill/detaill.component';
import { TaskInfoComponent } from './task-info/task-info.component';


@NgModule({
  declarations: [
    TaskComponent,
    DynamicComponentComponent,
    DetaillComponent,
    TaskInfoComponent,
    
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
