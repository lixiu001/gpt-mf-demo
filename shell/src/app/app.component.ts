import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MySharedService } from 'my-shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MySharedService]
})
export class AppComponent implements OnInit {
  title = 'shell';
  data: any;
  constructor(
    private router: Router,
    private mySharedService: MySharedService
    ){
    this.data = mySharedService.getData() || '123213';
  }

  ngOnInit(): void {
      console.log(this);
  }

  
  test() {
    this.data = this.mySharedService.getData();
  }


  goToShell(): void {
    this.router.navigate([''])
  }

}
