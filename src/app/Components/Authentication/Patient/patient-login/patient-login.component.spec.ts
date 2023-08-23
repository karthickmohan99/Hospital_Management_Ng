import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLoginComponent } from './patient-login.component';

describe('PatientLoginComponent', () => {
  let component: PatientLoginComponent;
  let fixture: ComponentFixture<PatientLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientLoginComponent]
    });
    fixture = TestBed.createComponent(PatientLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
