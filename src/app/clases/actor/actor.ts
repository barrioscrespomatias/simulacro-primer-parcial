import { Persona } from '../persona/persona';

export class Actor extends Persona {
  nacionalidad: string;
  
  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  // }

  // constructor(private fb: FormBuilder) {}
  constructor(
    id: string = '',
    nombre: string = '',
    edad: number = 0,
    apellido: string = '',
    nacionalidad: string = ''
  ) {
    super(id, nombre, edad, apellido);
    this.nacionalidad = nacionalidad
  }
}
