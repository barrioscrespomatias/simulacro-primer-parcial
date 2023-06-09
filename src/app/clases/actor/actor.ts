import { Persona } from '../persona/persona';

export class Actor extends Persona {
  nacionalidad: string;
  flag: string;
  
  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  // }

  // constructor(private fb: FormBuilder) {}
  constructor(
    id: string = '',
    nombre: string = '',
    apellido: string = '',
    edad: number = 0,
    nacionalidad: string = '',
    flag: string = ''
  ) {
    super(id, nombre, edad, apellido);
    this.nacionalidad = nacionalidad,
    this.flag = flag;
  }
}
