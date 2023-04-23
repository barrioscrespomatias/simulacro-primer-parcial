import { Component, EventEmitter, Output } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {

  listaPeliculas = [
    new Pelicula(crypto.randomUUID(),"A", "Accion",new Date("2020-01-16"),100, "ruta01"),
    new Pelicula(crypto.randomUUID(),"B", "Aventura",new Date("2022-05-23"),100, "ruta02"),
    new Pelicula(crypto.randomUUID(),"C", "Drama",new Date("2017-03-27"),100, "ruta03"),
  ];

  
@Output() onExponerPelicula = new EventEmitter<Pelicula>();

exponerPelicula(peliculaRecibida: Pelicula){
    this.onExponerPelicula.emit(peliculaRecibida)
  }  
}
