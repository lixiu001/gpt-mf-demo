import { TestBed } from '@angular/core/testing';

import { RemoteModuleLoaderService } from './remote-module-loader.service';

describe('RemoteModuleLoaderService', () => {
  let service: RemoteModuleLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteModuleLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
