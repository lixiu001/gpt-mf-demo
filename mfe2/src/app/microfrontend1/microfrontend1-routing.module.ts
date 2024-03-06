import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Microfrontend1Component } from './microfrontend1/microfrontend1.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then(
        (m) => m.LayoutModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Microfrontend1RoutingModule {}
