import { TestBed } from '@angular/core/testing';

import { LoadRemoteGuard } from './load-remote.guard';

describe('LoadRemoteGuard', () => {
  let guard: LoadRemoteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadRemoteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
