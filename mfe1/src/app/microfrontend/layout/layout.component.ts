import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'remote-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this);
    console.log('Remote LayoutComponent Init');
  }

  ngOnDestroy(): void {
    console.log('Remote LayoutComponent Destroy');
  }
  goToRemote1():void {
    this.router.navigate(['']);

  }


}
