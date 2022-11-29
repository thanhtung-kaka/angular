import { TestBed } from '@angular/core/testing';

import { QuantriService } from './quantri.service';

describe('QuantriService', () => {
  let service: QuantriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuantriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
