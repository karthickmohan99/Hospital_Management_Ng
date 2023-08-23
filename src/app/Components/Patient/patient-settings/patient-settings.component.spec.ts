import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSettingsComponent } from './patient-settings.component';

describe('PatientSettingsComponent', () => {
  let component: PatientSettingsComponent;
  let fixture: ComponentFixture<PatientSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientSettingsComponent]
    });
    fixture = TestBed.createComponent(PatientSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
