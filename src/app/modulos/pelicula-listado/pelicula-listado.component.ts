import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css'],
})
export class PeliculaListadoComponent {

  @Output() onEnviarItemHaciaPadre = new EventEmitter<Pelicula>();
  pelicula = new Pelicula('','','',new Date(),0,'');

  enviarItemHaciaPadre(pelicula : Pelicula){
    this.pelicula = pelicula;
    this.onEnviarItemHaciaPadre.emit(pelicula);
  }
}
