import { TestBed } from '@angular/core/testing';

import { DoctorserviceService } from './doctorservice.service';

describe('DoctorserviceService', () => {
  let service: DoctorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
