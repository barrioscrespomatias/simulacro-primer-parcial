import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'busqueda', loadChildren: () => import('./busqueda/busqueda.module').then(m => m.BusquedaModule) }, { path: 'peliculas/alta', loadChildren: () => import('./pelicula-alta/pelicula-alta.module').then(m => m.PeliculaAltaModule) }, { path: 'actor/alta', loadChildren: () => import('./actor-alta/actor-alta.module').then(m => m.ActorAltaModule) }, { path: 'actor/listado', loadChildren: () => import('./actor-listado/actor-listado.module').then(m => m.ActorListadoModule) }, { path: 'peliculas/listado', loadChildren: () => import('./pelicula-listado/pelicula-listado.module').then(m => m.PeliculaListadoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
