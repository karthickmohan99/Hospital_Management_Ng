import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorHeaderComponent } from './doctor-header.component';

describe('DoctorHeaderComponent', () => {
  let component: DoctorHeaderComponent;
  let fixture: ComponentFixture<DoctorHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorHeaderComponent]
    });
    fixture = TestBed.createComponent(DoctorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
