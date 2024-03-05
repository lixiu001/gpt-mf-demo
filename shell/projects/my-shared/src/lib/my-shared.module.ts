import { NgModule } from '@angular/core';
import { MySharedComponent } from './my-shared.component';
import { ShellButtonComponent } from './shell-modulle/shell-button.component';



@NgModule({
  declarations: [
    MySharedComponent,
    ShellButtonComponent
  ],
  imports: [
  ],
  exports: [
    MySharedComponent
  ]
})
export class MySharedModule { }
