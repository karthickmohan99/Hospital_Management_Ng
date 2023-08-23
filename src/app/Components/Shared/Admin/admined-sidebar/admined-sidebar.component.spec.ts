import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminedSidebarComponent } from './admined-sidebar.component';

describe('AdminedSidebarComponent', () => {
  let component: AdminedSidebarComponent;
  let fixture: ComponentFixture<AdminedSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminedSidebarComponent]
    });
    fixture = TestBed.createComponent(AdminedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
