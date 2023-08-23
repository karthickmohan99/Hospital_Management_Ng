import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppoitmentComponent } from './doctor-appoitment.component';

describe('DoctorAppoitmentComponent', () => {
  let component: DoctorAppoitmentComponent;
  let fixture: ComponentFixture<DoctorAppoitmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorAppoitmentComponent]
    });
    fixture = TestBed.createComponent(DoctorAppoitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
