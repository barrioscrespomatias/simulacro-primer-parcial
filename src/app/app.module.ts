import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { AltaActoresComponent } from './components/pages/alta-actores/alta-actores.component';
// import { AltaActorComponent } from './components/presentacion/actor/alta-actor/alta-actor.component';
// import { AltaActorComponent } from './components/presentacion/actor/alta-actor/alta-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    // AltaActoresComponent,
    // AltaActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
