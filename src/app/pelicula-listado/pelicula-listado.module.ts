import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaListadoRoutingModule } from './pelicula-listado-routing.module';
import { PeliculaListadoComponent } from './pelicula-listado.component';


@NgModule({
  declarations: [
    PeliculaListadoComponent
  ],
  imports: [
    CommonModule,
    PeliculaListadoRoutingModule
  ]
})
export class PeliculaListadoModule { }
//TODO hacer algo