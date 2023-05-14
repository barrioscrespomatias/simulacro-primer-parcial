import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorAltaRoutingModule } from './actor-alta-routing.module';
import { ActorAltaComponent } from './actor-alta.component';
import { AltaActoresComponent } from '../../components/pages/alta-actores/alta-actores.component';
import { AltaActorComponent } from '../../components/presentacion/actor/alta-actor/alta-actor.component';
import { TablaPaisesComponent } from '../../components/pages/pais/tabla-paises/tabla-paises.component';
import { DetallePaisComponent } from '../../components/presentacion/pais/detalle-pais/detalle-pais.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ActorAltaComponent,
    AltaActoresComponent,
    AltaActorComponent,
    TablaPaisesComponent,
    DetallePaisComponent,
  ],
  imports: [
    CommonModule,
    ActorAltaRoutingModule,
    ReactiveFormsModule
  ]
})
export class ActorAltaModule { }
