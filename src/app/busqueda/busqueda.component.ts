import { Component, Input } from '@angular/core';
import { Pelicula } from '../clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

export class BusquedaComponent {

  @Input() peliculaDesdeTabla:any;

  pelicula : Pelicula = new Pelicula('','','',new Date(),0,'');

  recibirPeliculaDePeliculaListado(peliculaRecibida : Pelicula){
    this.pelicula = peliculaRecibida;
  }
}
