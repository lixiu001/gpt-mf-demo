import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-shared',
  template: `
    <p>
      my-shared works!
    </p>
  `,
  styles: [
  ]
})
export class MySharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
