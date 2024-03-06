import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shell-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks = [
    { title: 'Task 1', description: 'Description for Task 1', modulePath: 'path/to/remote/module1' },
    { title: 'Task 2', description: 'Description for Task 2', modulePath: 'path/to/remote/module2' },
    // 其他任务...
  ];

  constructor() { }

  ngOnInit(): void {
  }

  loadRemoteModule(id:string):void  {

  }

}
