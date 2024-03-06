import { TestBed } from '@angular/core/testing';

import { LoadRemoteoModuleGuard } from './load-remoteo.guard';

describe('LoadRemoteoModuleGuard', () => {
  let guard: LoadRemoteoModuleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadRemoteoModuleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
