import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = ['卡片1', '卡片2', '卡片3', '卡片4', '卡片5'];

  constructor() { }

  ngOnInit(): void {
  }

}
