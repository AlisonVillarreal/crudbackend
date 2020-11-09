import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDenominacionesComponent } from './add-denominaciones.component';

describe('AddDenominacionesComponent', () => {
  let component: AddDenominacionesComponent;
  let fixture: ComponentFixture<AddDenominacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDenominacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDenominacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
