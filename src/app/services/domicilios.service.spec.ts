import { TestBed, inject } from '@angular/core/testing';

import { DomiciliosService } from './domicilios.service';

describe('DomiciliosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomiciliosService]
    });
  });

  it('should be created', inject([DomiciliosService], (service: DomiciliosService) => {
    expect(service).toBeTruthy();
  }));
});
