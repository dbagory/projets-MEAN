import { TestBed, inject } from '@angular/core/testing';

import { UpdatingService } from './updating.service';

describe('UpdatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatingService]
    });
  });

  it('should be created', inject([UpdatingService], (service: UpdatingService) => {
    expect(service).toBeTruthy();
  }));
});
