import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaAltaRoutingModule } from './pelicula-alta-routing.module';
import { PeliculaAltaComponent } from './pelicula-alta.component';


@NgModule({
  declarations: [
    PeliculaAltaComponent
  ],
  imports: [
    CommonModule,
    PeliculaAltaRoutingModule
  ]
})
export class PeliculaAltaModule { }
