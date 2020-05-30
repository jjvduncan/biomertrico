import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-permisos-crear',
  templateUrl: './permisos-crear.component.html',
  styleUrls: ['./permisos-crear.component.css']
})

export class PermisosCrearComponent implements OnInit {  
  submitted = false;
  permisosForm: FormGroup;
  PermisosProfile:any = ['ITS Yavirac', 'ITS Benito Juarez', 'ITS 24 de mayo','ITS Gran Colombia', 'Administrativo']
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.permisosForm = this.fb.group({
      code: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.permisosForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.permisosForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.permisosForm.valid) {
      return false;
    } else {
      this.apiService.createPermisos(this.permisosForm.value).subscribe(
        (res) => {
          console.log('Permisos successfully crar!')
          this.ngZone.run(() => this.router.navigateByUrl('/permisoss-listar'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}