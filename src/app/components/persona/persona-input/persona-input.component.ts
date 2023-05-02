import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persona-input',
  templateUrl: './persona-input.component.html',
  styleUrls: ['./persona-input.component.css']
})


export class PersonaInputComponent {
  @Input() clave:any;
  
}
