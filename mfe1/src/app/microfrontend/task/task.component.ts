import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'remote-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
