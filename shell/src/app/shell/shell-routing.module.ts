import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { LoadRemoteGuard } from './guards/load-remote.guard';

const routes: Routes = [
  {
    path: '', // 修改根路径为非空路径
    // pathMatch: 'full',
    component: LayoutComponent,
    children: [
      {
        path: '',
        // pathMatch: 'full',
        redirectTo: '/home',
        component: HomeComponent,
      },
      {
        path: 'home',
        pathMatch: 'prefix',
        component: HomeComponent,
      },
      {
        path: 'task',
        // pathMatch: 'prefix',
        loadChildren: () =>
          import('./task/task.module').then((m) => {
            return m.TaskModule;
          }),
      },
      {
        path: 'mfe1',
        // pathMatch: 'prefix',
        // canLoad: [LoadRemoteGuard], // 将守卫加载到这里
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:3001/remoteEntry.js',
            remoteName: 'mfe1',
            exposedModule: './Module',
          }).then((m) => {
            return m.MicrofrontendModule;
          }),
      },
      {
        path: 'mfe2',
        // pathMatch: 'prefix',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:3002/remoteEntry.js',
            remoteName: 'mfe2',
            exposedModule: './Module1',
          }).then((m) => {
            console.log(m);
            return m.Microfrontend1Module;
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
