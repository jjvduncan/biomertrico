import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Permisos2ListarComponent } from './permisos2-listar.component';

describe('Permisos2ListarComponent', () => {
  let component: Permisos2ListarComponent;
  let fixture: ComponentFixture<Permisos2ListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Permisos2ListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Permisos2ListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
