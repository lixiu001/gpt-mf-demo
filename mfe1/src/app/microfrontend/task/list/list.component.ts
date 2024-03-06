import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    
  }

  goToDetail(id:string):void {
    
  }

}
