import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

import { PermisosCrearComponent } from './components/permisos-crear/permisos-crear.component';
import { PermisosEditarComponent } from './components/permisos-editar/permisos-editar.component';
import { PermisosListarComponent } from './components/permisos-listar/permisos-listar.component';
import { Permisos2ListarComponent } from './components/permisos2-listar/permisos2-listar.component';
import { ApiService } from './service/api.service';
import { ApoService } from './service/apo.service';
import { MessageService } from './service/message.service';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts  from 'pdfmake/build/vfs_fonts';
import { MovilComponent } from './components/movil/movil.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CorreoComponent } from './components/correo/correo.component';

import { AuthService } from './service/auth.service';

PdfMakeWrapper.setFonts(pdfFonts);
@NgModule({
  declarations: [
    AppComponent,

    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,

    PermisosCrearComponent,
    PermisosEditarComponent,
    PermisosListarComponent,
    Permisos2ListarComponent,
    MovilComponent,
    CorreoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleMapsModule, 
    FormsModule
  ],
  providers: [AuthService, ApiService, ApoService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Optional() @SkipSelf() parentModule: AppModule) {
  }
 }

//////////////////////segundo

