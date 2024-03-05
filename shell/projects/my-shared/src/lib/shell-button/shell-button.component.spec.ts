import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellButtonComponent } from './shell-button.component';

describe('ShellButtonComponent', () => {
  let component: ShellButtonComponent;
  let fixture: ComponentFixture<ShellButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
