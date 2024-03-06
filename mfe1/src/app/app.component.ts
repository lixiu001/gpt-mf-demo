import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,OnDestroy  {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('remote AppComponent ngOnInit');
  }

  ngOnDestroy(): void {
      console.log('remote AppComponent ngOnDestroy');
  }
  title = 'remote';

  goToRemote1():void {

  }
}
