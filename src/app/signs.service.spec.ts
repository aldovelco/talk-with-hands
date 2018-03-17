import { TestBed, inject } from '@angular/core/testing';

import { SignsService } from './signs.service';

describe('SignsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignsService]
    });
  });

  it('should be created', inject([SignsService], (service: SignsService) => {
    expect(service).toBeTruthy();
  }));
});
