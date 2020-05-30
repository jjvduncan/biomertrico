import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-movil',
  templateUrl: './movil.component.html',
  styleUrls: ['./movil.component.css']
})
export class MovilComponent implements OnInit {
  title = "Maps";
  
  position ={
    lat: -0.228824,
    lng: -78.518527
  };
  label ={
    color: 'orange',
    text:'Docente'
  }
  
  
  Employee:any = [];

  constructor(private apiService: ApiService) { 
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }

  removeEmployee(employee, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEmployee(employee._id).subscribe((data) => {
          this.Employee.splice(index, 1);
        }
      )    
    }
  }

}
