import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { ListComponent } from './list/list.component';
import { TaskContentComponent } from './task-content/task-content.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    children:[{
      path:'',
      component: ListComponent,
    },
    {
      path:'detail',
      component: TaskContentComponent,
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
