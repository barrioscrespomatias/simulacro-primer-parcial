import { Component, Input } from '@angular/core';
import { Pais } from 'src/app/clases/pais/pais';
import { PaisInterface } from 'src/app/interfaces/pais/pais';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css'],
})
export class AltaActorComponent {  

  @Input() propId: any;
  @Input() pais: Pais = new Pais();
}
