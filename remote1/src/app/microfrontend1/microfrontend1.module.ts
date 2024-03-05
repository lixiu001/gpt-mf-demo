import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Microfrontend1RoutingModule } from './microfrontend1-routing.module';
import { Microfrontend1Component } from './microfrontend1/microfrontend1.component';
import { MySharedModule, MySharedService } from 'my-shared';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    Microfrontend1Component,
    PageNotFoundComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MySharedModule,
    Microfrontend1RoutingModule
  ],
  providers:[MySharedService]
})
export class Microfrontend1Module { }
