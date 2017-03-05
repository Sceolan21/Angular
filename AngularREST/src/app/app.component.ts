import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Equipos } from './equipos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'La Liga Santander';

  id:number;
  posicion:number;
  nombre:string;
  puntos:number;
  clasificacion:Equipos[];
  idMaximo:number;

  constructor(private http:Http){
      this.clasificacion=new Array<Equipos>();
  };
  mostrarEquipos(){
      let url="http://localhost:3000/equipos";
      this.http.get(url).subscribe(
          response => {
              let data = response.json();
              this.clasificacion=data;
          },
          error => console.error(error)
      );
  }
  insertarEquipos(){
    let url="http://localhost:3000/equipos";
    this.calcularIdMaximo();
    let data = {
        "id": this.idMaximo, "posicion": this.posicion, "nombre": this.nombre, "puntos": this.puntos
    }
    this.http.post(url,data).subscribe(
    response => console.log(response),
    error => console.error(error));
    this.mostrarEquipos();
  }

  borrarEquipos(id:number){
      let url="http://localhost:3000/equipos/"+id;
      this.http.delete(url).subscribe(
          response => console.log(response),
          error => console.error(error)
      )
      this.mostrarEquipos();
  }

  calcularIdMaximo(){
      this.idMaximo = this.clasificacion.length+1;
  }

}
