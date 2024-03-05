import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import('./home/home.module').then((m) => {
      return m.HomeModule;
    }),
    pathMatch: 'full',
  },
  {
    path: 'remote',
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
    path: 'remote1',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3002/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './Module1',
      }).then((m) => {
        return m.Microfrontend1Module;
      }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
