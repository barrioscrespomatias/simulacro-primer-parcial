import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorAltaRoutingModule } from './actor-alta-routing.module';
import { ActorAltaComponent } from './actor-alta.component';


@NgModule({
  declarations: [
    ActorAltaComponent
  ],
  imports: [
    CommonModule,
    ActorAltaRoutingModule
  ]
})
export class ActorAltaModule { }
