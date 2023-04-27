import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css'],
})
export class PeliculaListadoComponent {
  @Input() peliculaDesdeTabla:any;
  @Output() onExponerPeliculaDePeliculaListado = new EventEmitter<Pelicula>();

  pelicula = new Pelicula('','','',new Date(),0,'');

  recibirPelicula(peliculaRecibida : Pelicula){
    this.pelicula = peliculaRecibida;
  }
}
