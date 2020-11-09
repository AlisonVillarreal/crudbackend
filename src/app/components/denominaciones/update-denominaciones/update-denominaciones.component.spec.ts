import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDenominacionesComponent } from './update-denominaciones.component';

describe('UpdateDenominacionesComponent', () => {
  let component: UpdateDenominacionesComponent;
  let fixture: ComponentFixture<UpdateDenominacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDenominacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDenominacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
