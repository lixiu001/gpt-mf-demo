import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCoreComponent } from './dynamic-core.component';

describe('DynamicCoreComponent', () => {
  let component: DynamicCoreComponent;
  let fixture: ComponentFixture<DynamicCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
