import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor/actor';
import { Pais } from 'src/app/clases/pais/pais';
import { PaisInterface } from 'src/app/interfaces/pais/pais';
import { ActorService } from 'src/app/services/actor/actor.service';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css'],
})
export class AltaActoresComponent {
  form!: FormGroup;
  @Input() pais: Pais = new Pais();
  actorService!: ActorService;

  constructor(actorService: ActorService) {
    this.actorService = actorService;
  }

  //#region NG Hooks

  ngOnInit(): void {
    // console.log(this.pais)
    this.form = new FormGroup({
      // usuario : new FormControl('',)
      nombre: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
      apellido: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
      edad: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
      // id: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
      flag: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
      nacionalidad: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
    });
  }

  //#endregion

  //#region Propiedades
  actor: Actor = new Actor();
  paisDesdeTabla!: PaisInterface;

  //#endregion

  //#region Getters
  get nombre() {
    return this.form.get('nombre');
  }

  get apellido() {
    return this.form.get('apellido');
  }

  get edad() {
    return this.form.get('edad');
  }

  // get id() {
  //   return this.form.get('id');
  // }

  get flag() {
    return this.form.get('flag');
  }

  get nacionalidad() {
    return this.form.get('nacionalidad');
  }

  //#endregion

  //#region Metodos
  recibirItemDeHijo(paisRecibido: PaisInterface) {
    this.paisDesdeTabla = paisRecibido;
  }

  CrearActor() {
    //TODO Me sirve para actualizar el valor del pais seleccionado en este formulario.
    this.form.patchValue({
      nacionalidad: this.paisDesdeTabla.name,
      flag: this.paisDesdeTabla.flag,
    });

    // id: string = '',
    // nombre: string = '',
    // apellido: string = '',
    // edad: number = 0,
    // nacionalidad: string = '',
    // flag: string = ''

    this.actorService.guardar(
      new Actor(
        '',
        this.nombre?.value,
        this.apellido?.value,
        this.edad?.value,
        this.nacionalidad?.value,
        this.flag?.value
      )
    );
  }

  //#endregion
}
