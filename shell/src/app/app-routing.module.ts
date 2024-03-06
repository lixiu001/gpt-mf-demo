import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shell/page-not-found/page-not-found.component';
import { AuthGuard } from './shell/guards/auth.guard';

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
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
