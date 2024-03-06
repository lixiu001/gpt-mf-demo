import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'remote1';
  ngOnInit(): void {
      console.log('remote1 AppComponent');
  }
  
  ngOnDestroy(): void {
    console.log('remote1 AppComponent ngOnDestroy');
  }
  goToRemote():void {

  }
}
