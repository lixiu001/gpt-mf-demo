import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MySharedModule, MySharedService } from 'my-shared';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MySharedModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MySharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
