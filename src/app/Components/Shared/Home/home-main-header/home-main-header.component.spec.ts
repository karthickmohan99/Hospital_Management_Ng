import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainHeaderComponent } from './home-main-header.component';

describe('HomeMainHeaderComponent', () => {
  let component: HomeMainHeaderComponent;
  let fixture: ComponentFixture<HomeMainHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMainHeaderComponent]
    });
    fixture = TestBed.createComponent(HomeMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
