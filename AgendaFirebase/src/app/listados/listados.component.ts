import { Component } from '@angular/core';
import { Persona } from './../modelos/persona';
import { AgendaService } from './../servicios/agendaService';

@Component({
  selector: 'listados',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.css'],
  providers:[AgendaService]
})
export class listadosComponent{
    
    agenda:Array<Persona>;

    constructor(private as: AgendaService) {
    this.as.listarPersonas().subscribe(
      value => this.agenda = value
    );
  }
  EliminarPersona(p:Persona){
      this.as.eliminarPersona(p);
  }
}