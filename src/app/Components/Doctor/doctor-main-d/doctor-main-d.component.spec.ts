import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMainDComponent } from './doctor-main-d.component';

describe('DoctorMainDComponent', () => {
  let component: DoctorMainDComponent;
  let fixture: ComponentFixture<DoctorMainDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorMainDComponent]
    });
    fixture = TestBed.createComponent(DoctorMainDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
