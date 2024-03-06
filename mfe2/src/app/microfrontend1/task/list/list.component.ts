import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'remote-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tasks = [
    { title: 'Task 3', description: 'Description for Task 3' },
    { title: 'Task 4', description: 'Description for Task 4' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
