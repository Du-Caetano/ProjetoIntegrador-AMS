import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageBWComponent } from './landing-page-bw.component';

describe('LandingPageBWComponent', () => {
  let component: LandingPageBWComponent;
  let fixture: ComponentFixture<LandingPageBWComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageBWComponent]
    });
    fixture = TestBed.createComponent(LandingPageBWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
