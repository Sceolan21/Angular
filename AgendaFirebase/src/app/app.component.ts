import { Component } from '@angular/core';
import { Persona } from './modelos/persona';
import { AgendaService } from './servicios/agendaService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'Mi Agenda en Angular 2';

}
