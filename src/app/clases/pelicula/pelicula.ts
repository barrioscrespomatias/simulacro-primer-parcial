export class Pelicula {
  id: string = '';
  nombre: string = '';
  tipo: string = '';
  fecha_estreno: Date = new Date();
  cantidad_publico: number = 0;
  foto_pelicula: string = '';

  // usuarioForm = this.fb.group({
  //   // nombre: [''],
  //   // clave: ['', Validators.required],
  // });

  onSubmit() {
    // TODO: Use EventEmitter with form value
  }

  // constructor(private fb: FormBuilder) {}
  constructor(
    id: string,
    nombre: string,
    tipo: string,
    fecha_estreno: Date,
    cantidad_publico: number,
    foto_pelicula: string
  ) {
    (this.id = id),
      (this.nombre = nombre),
      (this.tipo = tipo),
      (this.fecha_estreno = fecha_estreno),
      (this.cantidad_publico = cantidad_publico),
      (this.foto_pelicula = foto_pelicula);
  }
}
