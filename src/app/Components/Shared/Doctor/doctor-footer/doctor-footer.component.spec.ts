import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFooterComponent } from './doctor-footer.component';

describe('DoctorFooterComponent', () => {
  let component: DoctorFooterComponent;
  let fixture: ComponentFixture<DoctorFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorFooterComponent]
    });
    fixture = TestBed.createComponent(DoctorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
