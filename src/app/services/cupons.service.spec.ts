import { TestBed } from '@angular/core/testing';

import { CuponsService } from './cupons.service';

describe('CuponsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuponsService = TestBed.get(CuponsService);
    expect(service).toBeTruthy();
  });
});
