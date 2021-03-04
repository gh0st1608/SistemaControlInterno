import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabadoActualizarComponent } from './grabado-actualizar.component';

describe('GrabadoActualizarComponent', () => {
  let component: GrabadoActualizarComponent;
  let fixture: ComponentFixture<GrabadoActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrabadoActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabadoActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
