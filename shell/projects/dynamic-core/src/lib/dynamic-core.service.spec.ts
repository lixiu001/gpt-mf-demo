import { TestBed } from '@angular/core/testing';

import { DynamicCoreService } from './dynamic-core.service';

describe('DynamicCoreService', () => {
  let service: DynamicCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
