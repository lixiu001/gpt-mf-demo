import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'remote-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit(): void {
    console.log(this);
    console.log('Remote LayoutComponent Init');
  }

  ngOnDestroy(): void {
    console.log('Remote LayoutComponent Destroy');
  }
  goToRemote1():void {

  }


}
