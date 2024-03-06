import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicrofrontendRoutingModule } from './microfrontend-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './layout/home/home.component';
import { MicrofrontendComponent } from './microfrontend/microfrontend.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    MicrofrontendComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MicrofrontendRoutingModule
  ]
})
export class MicrofrontendModule { }
