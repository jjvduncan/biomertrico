import { Component, OnInit } from '@angular/core';
import { ApoService } from './../../service/apo.service';

import { PdfMakeWrapper, Txt, QR, TextReference, Table, Cell} from 'pdfmake-wrapper';


@Component({
  selector: 'app-permisos2-listar',
  templateUrl: './permisos2-listar.component.html',
  styleUrls: ['./permisos2-listar.component.css']
})
  export class Permisos2ListarComponent implements OnInit {
 
   
    Permisos:any = [];

    constructor(private apoService: ApoService) { 
      this.readPermisos();
    }

    ngOnInit() {}

    readPermisos(){
      this.apoService.getPermisoss().subscribe((data) => {
      this.Permisos = data;
      })    
    }

    removePermisos(permisos, index) {
      if(window.confirm('Are you sure?')) {
          this.apoService.deletePermisos(permisos._id).subscribe((data) => {
            this.Permisos.splice(index, 1);
          }
        )    
      }
    }
    ////
    fecha(){
    const a = new Date();
document.write(a.getDate() + "/" + (a.getMonth() +1) + "/" + a.getFullYear());
  }
  ////
    generatePDF() {
      
           //
        const pdf = new PdfMakeWrapper();
              
        pdf.add(
          new TextReference('cedula').end // returns the text: This is the text to be referenced
        );  


        pdf.add(
            new QR('my code').fit(100).end
        );
        
        pdf.add(
        new Txt('').alignment('right').italics().end   
        );   
        pdf.add(
        new Txt('Permiso').alignment('center').italics().end   
        );
        pdf.add(
        new Txt('Estimado Sr. Rector la razón de esta misiva es para solicitare cordialmente me dé un permiso de trabajo para realizarme una operación en la vesícula desde el , ya que últimamente me he sentido mal de salud y en mi visita al médico me recomendó que me someta a una operación de manera urgente. Adjunto el certificado médico escrito por el Doctor Alfonso Martínez, con las recomendaciones realizadas.') .italics().end   
        );  
        pdf.add(
           new Txt( 'this.apoService.updatePermisos(id, this.editForm.value)').end
           );  
        pdf.watermark(
            new Txt('Permiso').color('gray').end 
        ); 
        pdf.create().print();
      }   
    
     //
}