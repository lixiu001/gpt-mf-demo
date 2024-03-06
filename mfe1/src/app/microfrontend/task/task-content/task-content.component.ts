import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'remote-task-content',
  templateUrl: './task-content.component.html',
  styleUrls: ['./task-content.component.scss']
})
export class TaskContentComponent implements OnInit {
  // @ViewChild('contentArea')
  // contentAreaContainer: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
