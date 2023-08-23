import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheculeComponent } from './schecule.component';

describe('ScheculeComponent', () => {
  let component: ScheculeComponent;
  let fixture: ComponentFixture<ScheculeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheculeComponent]
    });
    fixture = TestBed.createComponent(ScheculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
