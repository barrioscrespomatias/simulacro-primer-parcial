import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaListadoComponent } from './pelicula-listado.component';

const routes: Routes = [{ path: '', component: PeliculaListadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaListadoRoutingModule { }
