import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shell-dynamic-component,div[dynamic-component]',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
