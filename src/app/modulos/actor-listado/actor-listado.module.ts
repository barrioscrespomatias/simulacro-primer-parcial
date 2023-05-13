import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorListadoRoutingModule } from './actor-listado-routing.module';
import { ActorListadoComponent } from './actor-listado.component';


@NgModule({
  declarations: [
    ActorListadoComponent
  ],
  imports: [
    CommonModule,
    ActorListadoRoutingModule
  ]
})
export class ActorListadoModule { }
