import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProviderComponent } from './crud-provider.component';

describe('CrudProviderComponent', () => {
  let component: CrudProviderComponent;
  let fixture: ComponentFixture<CrudProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
