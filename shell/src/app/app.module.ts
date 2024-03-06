import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MySharedModule, MySharedService } from 'my-shared';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shell/page-not-found/page-not-found.component';
import { AuthGuard } from './shell/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    MySharedModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MySharedService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
