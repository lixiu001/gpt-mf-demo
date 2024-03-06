import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shell/page-not-found/page-not-found.component';
import { AuthGuard } from './shell/guards/auth.guard';
import { LoadRemoteGuard } from './shell/guards/load-remote.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./shell/shell.module').then((m) => {
        return m.ShellModule;
      }),
  },
  // { path: 'mef1', loadChildren: () => import('mef1/Module').then(m => m.BasketModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
