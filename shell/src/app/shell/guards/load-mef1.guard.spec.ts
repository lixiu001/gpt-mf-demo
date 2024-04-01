import { TestBed } from '@angular/core/testing';

import { LoadMef1Guard } from './load-mef1.guard';

describe('LoadMef1Guard', () => {
  let guard: LoadMef1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadMef1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
