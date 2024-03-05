import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySharedComponent } from './my-shared.component';

describe('MySharedComponent', () => {
  let component: MySharedComponent;
  let fixture: ComponentFixture<MySharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
