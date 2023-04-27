import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaListadoRoutingModule } from './pelicula-listado-routing.module';
import { TablaPeliculaComponent } from '../components/tabla-pelicula/tabla-pelicula.component';
@NgModule({
  declarations: [ TablaPeliculaComponent],
  imports: [CommonModule, PeliculaListadoRoutingModule],
})
export class PeliculaListadoModule {}
