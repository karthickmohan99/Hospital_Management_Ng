import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegisterComponent } from './doctor-register.component';

describe('DoctorRegisterComponent', () => {
  let component: DoctorRegisterComponent;
  let fixture: ComponentFixture<DoctorRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorRegisterComponent]
    });
    fixture = TestBed.createComponent(DoctorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
