import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  guardar() {
    const coleccion = collection(this.firestore, 'usuarios');
    addDoc(coleccion, { nombre: 'Alejandra', apellido: 'Crespo', edad: 50 });
  }


  // La funcion traer se debe llamar una sola vez porque sino se suscribiria todo el tiempo
  traer() {
    const coleccion = collection(this.firestore, 'usuarios');
    //Observable es un dato que puede 'observar de la base de datos'
    const respuestaObservable = collectionData(coleccion);
    //nos suscribimos a la base d edatos
    //Tener cuidado porque las suscripciones son acumulativas.
    const suscripcion =  respuestaObservable.subscribe((informacion) => {
      console.log(informacion);
    });

    //En caso de que se necesite desuscribir PERO se tiene que destruir en algun lado
    //retornar el observable.
    // o tambien se puede trabajar con un singletton.

    // Sirve el subscribe pero no siempre es necesario
    suscripcion.unsubscribe();


    //otro ejemplo para traer una sola vez sin escuchar cambios
    getDocs(coleccion).then((respuesta)=>{
      console.log(respuesta)
    })
  }

  modificar() {
    const coleccion = collection(this.firestore, 'usuarios');
    const documento = doc(coleccion, 'GuidDocumento')
    // updateDoc(documento, usuario);
  }
}
