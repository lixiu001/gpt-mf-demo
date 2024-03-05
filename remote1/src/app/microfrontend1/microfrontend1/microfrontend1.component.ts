import { Component, OnInit } from '@angular/core';
import { MySharedService } from 'my-shared';  

@Component({
  selector: 'app-microfrontend1',
  templateUrl: './microfrontend1.component.html',
  styleUrls: ['./microfrontend1.component.scss'],
})
export class Microfrontend1Component implements OnInit {
  data:any;
  constructor(private mySharedService:MySharedService) { }

  ngOnInit(): void {
  }
  test(){
    this.mySharedService.setData('我是从remote1过来的');
    this.data=this.mySharedService.getData();
  }
}
