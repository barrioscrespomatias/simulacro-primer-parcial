import { Component } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent {
  actor : Actor = new Actor();
}
