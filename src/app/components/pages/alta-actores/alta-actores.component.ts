import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor/actor';
import { PaisInterface } from 'src/app/interfaces/pais/pais';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent {

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      // usuario : new FormControl('',)
      nombre: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
      apellido: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
      id: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
      flag: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
      nacionalidad: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
    });
  }

  actor : Actor = new Actor();
  paisDesdeTabla! : PaisInterface;

  recibirItemDeHijo(paisRecibido : PaisInterface){
    this.paisDesdeTabla = paisRecibido;
    console.log('en el padre')
    console.log(paisRecibido)
  }

  get nombre() {
    return this.form.get('nombre');
  }

  get apellido() {
    return this.form.get('apellido');
  }

  get id() {
    return this.form.get('id');
  }

  get flag() {
    return this.form.get('flag');
  }

  get nacionalidad() {
    return this.form.get('nacionalidad');
  }

  CrearActor(){
    console.log(this.actor)
  }
}