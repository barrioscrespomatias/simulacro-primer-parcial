import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

export class Usuario {
  id: string = '';
  nombre: string = '';
  tipo: string = '';
  fecha_estreno: Date = new Date();
  cantidad_publico: number = 0;
  foto_pelicula: string = '';

  usuarioForm = this.fb.group({
    // nombre: [''],
    // clave: ['', Validators.required],
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
  }

  constructor(private fb: FormBuilder) {}
}
