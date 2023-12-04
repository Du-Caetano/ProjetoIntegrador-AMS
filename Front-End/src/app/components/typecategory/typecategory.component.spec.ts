import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecategoryComponent } from './typecategory.component';

describe('TypecategoryComponent', () => {
  let component: TypecategoryComponent;
  let fixture: ComponentFixture<TypecategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypecategoryComponent]
    });
    fixture = TestBed.createComponent(TypecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
