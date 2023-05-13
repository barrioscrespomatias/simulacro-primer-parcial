import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import { TablaPeliculaComponent } from '../../components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from '../../components/presentacion/pelicula/detalle-pelicula/detalle-pelicula.component';
import { PeliculaListadoComponent } from '../pelicula-listado/pelicula-listado.component';
import { AltaActoresComponent } from '../../components/pages/alta-actores/alta-actores.component';
import { AltaActorComponent } from '../../components/presentacion/actor/alta-actor/alta-actor.component';


@NgModule({
  declarations: [
    BusquedaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    PeliculaListadoComponent,
    AltaActoresComponent,
    AltaActorComponent
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule
  ]
})
export class BusquedaModule { }
