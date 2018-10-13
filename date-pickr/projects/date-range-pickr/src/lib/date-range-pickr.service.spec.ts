import { TestBed } from '@angular/core/testing';

import { DateRangePickrService } from './date-range-pickr.service';

describe('DateRangePickrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateRangePickrService = TestBed.get(DateRangePickrService);
    expect(service).toBeTruthy();
  });
});
