import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';


@Component({
  selector: 'app-permisos-listar',
  templateUrl: './permisos-listar.component.html',
  styleUrls: ['./permisos-listar.component.css']
})
  export class PermisosListarComponent implements OnInit {
    
    Permisos:any = [];

    constructor(private apiService: ApiService) { 
      this.readPermisos();
    }

    ngOnInit() {}

    readPermisos(){
      this.apiService.getPermisoss().subscribe((data) => {
      this.Permisos = data;
      })    
    }

    removePermisos(permisos, index) {
      if(window.confirm('Are you sure?')) {
          this.apiService.deletePermisos(permisos._id).subscribe((data) => {
            this.Permisos.splice(index, 1);
          }
        )    
      }
    }
  }
