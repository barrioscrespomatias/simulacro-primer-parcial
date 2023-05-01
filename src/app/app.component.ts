import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public firebaseDb:FirebaseService){}

  traer(){
    this.firebaseDb.traer();
  }

  guardar(){
    this.firebaseDb.guardar();
  }

  title = 'simulacro-primer-parcial';
}
