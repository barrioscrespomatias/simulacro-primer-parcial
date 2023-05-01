import { Component } from '@angular/core';
import { Component } from '../../../clases/pelicula';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  persona : Persona = new Persona();

}
