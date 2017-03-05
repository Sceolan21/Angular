import { Persona } from '../modelos/persona';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable() 
export class AgendaService{

    constructor(private af: AngularFire) {

    }

    insertaPersona(p:Persona) {
        this.af.database.list("/personas").push(p);
    }

    listarPersonas(): Observable<Persona[]>{
        return this.af.database.list("/personas");
    }

    eliminarPersona(p:Persona){
        return this.af.database.list("/personas").remove(p.$key);
    }
}