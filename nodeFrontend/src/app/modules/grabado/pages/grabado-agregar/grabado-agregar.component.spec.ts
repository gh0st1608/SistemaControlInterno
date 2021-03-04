import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabadoAgregarComponent } from './grabado-agregar.component';

describe('GrabadoAgregarComponent', () => {
  let component: GrabadoAgregarComponent;
  let fixture: ComponentFixture<GrabadoAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrabadoAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabadoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
