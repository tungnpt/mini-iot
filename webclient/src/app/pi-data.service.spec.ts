import { TestBed, inject } from '@angular/core/testing';

import { PiDataService } from './pi-data.service';

describe('PiDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PiDataService]
    });
  });

  it('should be created', inject([PiDataService], (service: PiDataService) => {
    expect(service).toBeTruthy();
  }));
});
