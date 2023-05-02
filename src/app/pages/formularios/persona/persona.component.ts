import { Component } from '@angular/core';
import { Persona } from '../../../clases/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  persona : Persona = new Persona('','',0,'');
}
