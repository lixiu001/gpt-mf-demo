import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'remote-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tasks = [
    { title: 'Task 1', description: 'Description for Task 1',id:'1' },
    { title: 'Task 2', description: 'Description for Task 2' ,id:'2'},
  ];

  constructor(
    private route: ActivatedRoute,  
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }

  goToDetail(id:string):void {
    this.router.navigate(['./detail'],{relativeTo:this.route})
  }
}
