import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import { TablaPeliculaComponent } from '../components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from '../components/detalle-pelicula/detalle-pelicula.component';
import { PeliculaListadoComponent } from '../pelicula-listado/pelicula-listado.component';
import { PersonaComponent } from '../pages/formularios/persona/persona.component';
import { PersonaInputComponent } from '../components/persona/persona-input/persona-input.component';


@NgModule({
  declarations: [
    BusquedaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    PeliculaListadoComponent,
    PersonaComponent,
    PersonaInputComponent
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule
  ]
})
export class BusquedaModule { }
