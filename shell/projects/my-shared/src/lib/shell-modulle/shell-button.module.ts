import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellButtonComponent } from './shell-button.component';

@NgModule({
  declarations: [ShellButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [ShellButtonComponent]
})
export class ShellButtonModule { }
