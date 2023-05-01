export class Persona {
  id: string = '';
  nombre: string = '';
  apellido: string = '';
  edad: number = 0;

 
  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  // }

  // constructor(private fb: FormBuilder) {}
  constructor(
    id: string,
    nombre: string,
    edad: number,
    apellido: string
  ) {
    (this.id = id),
      (this.nombre = nombre),
      (this.edad = edad),
      (this.apellido = apellido);
  }
}
