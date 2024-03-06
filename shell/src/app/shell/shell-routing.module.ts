import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'task',
        loadChildren: () =>
          import('./task/task.module').then((m) => {
            return m.TaskModule;
          }),
      },
      {
        path: 'mfe1',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:3001/remoteEntry.js',
            remoteName: 'mfe1',
            exposedModule: './Module',
          }).then((m) => {
            return m.MicrofrontendModule;
          }),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
