import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminedHeaderComponent } from './admined-header.component';

describe('AdminedHeaderComponent', () => {
  let component: AdminedHeaderComponent;
  let fixture: ComponentFixture<AdminedHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminedHeaderComponent]
    });
    fixture = TestBed.createComponent(AdminedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
