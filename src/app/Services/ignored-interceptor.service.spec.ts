import { TestBed } from '@angular/core/testing';

import { IgnoredInteceptorService } from './ignored-inteceptor.service';

describe('GetEuroService', () => {
  let service: IgnoredInteceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgnoredInteceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
