import { Permisos } from './../../model/Permisos';
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApoService } from './../../service/apo.service';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-permisos-editar',
  templateUrl: './permisos-editar.component.html',
  styleUrls: ['./permisos-editar.component.css']
})

export class PermisosEditarComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  permisosData: Permisos[];
  PermisosProfile:any = ['ITS Yavirac', 'ITS Benito Juarez', 'ITS 24 de mayo','ITS Gran Colombia', 'Administrativo'];
  RazonProfile:any = ['Salud', 'Calamidad', 'Salida retrasada','Otros'];
  
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apoService: ApoService, 
    private apiService: ApiService,
    private router: Router, 
    private ngZone: NgZone
  ) {
    this.mainForm();
  }

  ngOnInit() {
    this.updatePermisos();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getPermisos(id);
    this.editForm = this.fb.group({
      cedula: ['', [Validators.required]],
      name: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],  
     razon: ['', [Validators.required]],
      archivo: ['', [Validators.required]],

                 })
  }
  mainForm() {
    this.editForm = this.fb.group({
      code: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      name: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]], 
      razon: ['', [Validators.required]],
      archivo: ['', [Validators.required]],
    })
  }
  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true
    }
    )
  }

  updateProfile2(e) {
    this.editForm.get('razon').setValue(e, {
      onlySelf: true
    }
    )
  }
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getPermisos(id) {
    this.apiService.getPermisos(id).subscribe(data => {
      this.editForm.setValue({
        cedula: data['cedula'],
        name: data['name'],
        email: data['email'],
        fecha: ['', [Validators.required]],
        hora: ['', [Validators.required]],
        designation: data['designation'], 
        razon: ['', [Validators.required]],
        archivo: ['', [Validators.required]],
      });
    });
  }

  updatePermisos() {
    this.editForm = this.fb.group({
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      name: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      razon: ['', [Validators.required]],
      archivo: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else { 
            this.apiService.createPermisos(this.editForm.value).subscribe
      this.apoService.createPermisos(this.editForm.value).subscribe
      (
        (res) => {
          console.log('Permiso creado...')
          this.ngZone.run(() => this.router.navigateByUrl('/permisoss2-listar'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}