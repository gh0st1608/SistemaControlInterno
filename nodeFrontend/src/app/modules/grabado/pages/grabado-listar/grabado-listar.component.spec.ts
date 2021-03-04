import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabadoListarComponent } from './grabado-listar.component';

describe('GrabadoListarComponent', () => {
  let component: GrabadoListarComponent;
  let fixture: ComponentFixture<GrabadoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrabadoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabadoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
