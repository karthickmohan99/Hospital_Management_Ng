import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSidebarComponent } from './doctor-sidebar.component';

describe('DoctorSidebarComponent', () => {
  let component: DoctorSidebarComponent;
  let fixture: ComponentFixture<DoctorSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorSidebarComponent]
    });
    fixture = TestBed.createComponent(DoctorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
