import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSessionComponent } from './doctor-session.component';

describe('DoctorSessionComponent', () => {
  let component: DoctorSessionComponent;
  let fixture: ComponentFixture<DoctorSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorSessionComponent]
    });
    fixture = TestBed.createComponent(DoctorSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
