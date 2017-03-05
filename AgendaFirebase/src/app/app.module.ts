import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { formulariosComponent } from './formularios/formularios.component';
import { listadosComponent } from './listados/listados.component';
import { AgendaService } from './servicios/agendaService';

const config = {
    apiKey: "AIzaSyBZBnpikBSDsphTZ3t0uhTtsOXi_zktgbo",
    authDomain: "agenda-550c8.firebaseapp.com",
    databaseURL: "https://agenda-550c8.firebaseio.com",
    storageBucket: "agenda-550c8.appspot.com",
    messagingSenderId: "1007083299499"
  };

@NgModule({
  declarations: [
    AppComponent,
    formulariosComponent,
    listadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
