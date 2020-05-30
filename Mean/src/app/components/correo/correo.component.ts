import { Component,  } from '@angular/core';
import { MessageService } from './../../service/message.service';
import swal  from 'sweetalert2';


@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})
export class CorreoComponent  {

  constructor(public _MessageService: MessageService) { }
  
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {  
      swal.fire("Formulario de contacto", "Mensaje enviado correctamente", 'success');
      });
  }

}
