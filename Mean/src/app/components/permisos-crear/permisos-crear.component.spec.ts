import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosCrearComponent } from './permisos-crear.component';

describe('PermisosCrearComponent', () => {
  let component: PermisosCrearComponent;
  let fixture: ComponentFixture<PermisosCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermisosCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
