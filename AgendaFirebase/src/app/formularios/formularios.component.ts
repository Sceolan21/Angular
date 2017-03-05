import { Component } from '@angular/core';
import { Persona } from './../modelos/persona';
import { AgendaService } from './../servicios/agendaService';

@Component({
  selector: 'formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'],
  providers:[AgendaService]
})
export class formulariosComponent{
agenda:Persona[];
  persona:Persona = new Persona("Pepito","Grillo",123121212,"F",[{value:'informatica', selected:false}, {value:'viajes', selected:false},{value:'cine', selected:false}]);

  constructor(private as: AgendaService) {}

  insertarPersona() {
    this.as.insertaPersona(this.persona);
    this.persona = new Persona("","",0,"",[{value:'informatica', selected:false}, {value:'viajes', selected:false},{value:'cine', selected:false}]);
  }

  limpiarPersona(){
      this.persona.limpiar();
  }
}