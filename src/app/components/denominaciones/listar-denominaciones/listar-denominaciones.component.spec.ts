import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDenominacionesComponent } from './listar-denominaciones.component';

describe('ListarDenominacionesComponent', () => {
  let component: ListarDenominacionesComponent;
  let fixture: ComponentFixture<ListarDenominacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDenominacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDenominacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
