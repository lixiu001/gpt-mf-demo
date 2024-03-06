import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  loadRemoteModule(id:string):void  {
    this.router.navigate(['/mef1'])
  }

}
