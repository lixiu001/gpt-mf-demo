import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { slideInAnimation } from '../animations';
import { animate, group, query, stagger, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'remote-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.task-card', [
          style({opacity: 1, transform: 'translateY(1000px)'}),
          stagger(30, [
            animate('500ms cubic-bezier(0, 0, 0.5 ,1)',
            style({ opacity: 1, transform: 'translateY(0px)' }))
          ])
        ])
      ])
    ]),
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
    ]),
  ]
})
export class ListComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;
  heroesTotal = -1;
  tasks = [
    { title: 'Task 1', description: 'Description for Task 1', id: '1' },
    { title: 'Task 2', description: 'Description for Task 2', id: '2' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  goToDetail(id: string): void {
    this.router.navigate(['./detail'], { relativeTo: this.route })
  }
}
