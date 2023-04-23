import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorListadoComponent } from './actor-listado.component';

const routes: Routes = [{ path: '', component: ActorListadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorListadoRoutingModule { }
