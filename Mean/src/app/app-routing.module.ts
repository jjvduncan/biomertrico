import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

import { PermisosCrearComponent } from './components/permisos-crear/permisos-crear.component';
import { PermisosListarComponent } from './components/permisos-listar/permisos-listar.component';
import { Permisos2ListarComponent } from './components/permisos2-listar/permisos2-listar.component';
import { PermisosEditarComponent } from './components/permisos-editar/permisos-editar.component';
import { MovilComponent } from './components/movil/movil.component';
import { CorreoComponent } from './components/correo/correo.component';

const routes: Routes = [

  // otherwise redirect to home},C
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'employees-list', component: EmployeeListComponent },

 
  { path: 'crear-permisos', component: PermisosCrearComponent},
  { path: 'editar-permisos/:id', component: PermisosEditarComponent},
  { path: 'permisoss-listar', component: PermisosListarComponent},
  
  { path: 'permisoss2-listar', component: Permisos2ListarComponent},
  { path: 'movil', component: MovilComponent },
  { path: 'correo', component: CorreoComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

///// tercero

