import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadChildren: () =>
    import('./shell/shell.module').then((m) => {
      return m.ShellModule;
    }),
  }

    // {
  //   path: 'task',
  //   pathMatch: 'prefix',
  //   loadChildren: (): Promise<any> => import('./task/task.module').then(m => m.TaskModule)
  // },
  // {
  //   path: 'task',
  //   loadChildren: () =>
  //     import('./task/task.module').then((m) => {
  //       return m.TaskModule;
  //     }),
  // },
  // {
  //   path: 'mfe1',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       remoteEntry: 'http://localhost:3001/remoteEntry.js',
  //       remoteName: 'mfe1',
  //       exposedModule: './Module',
  //     }).then((m) => {
  //       return m.MicrofrontendModule;
  //     }),
  // },
  // {
  //   path: 'mfe2',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       remoteEntry: 'http://localhost:3002/remoteEntry.js',
  //       remoteName: 'mfe2',
  //       exposedModule: './Module1',
  //     }).then((m) => {
  //       return m.Microfrontend1Module;
  //     }),
  // },
  // {
  //   path: 'remote',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       remoteEntry: 'http://localhost:3001/remoteEntry.js',
  //       remoteName: 'mfe1',
  //       exposedModule: './Module',
  //     }).then((m) => {
  //       return m.MicrofrontendModule;
  //     }),
  // },
  // {
  //   path: 'remote1',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       remoteEntry: 'http://localhost:3002/remoteEntry.js',
  //       remoteName: 'mfe2',
  //       exposedModule: './Module1',
  //     }).then((m) => {
  //       return m.Microfrontend1Module;
  //     }),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
