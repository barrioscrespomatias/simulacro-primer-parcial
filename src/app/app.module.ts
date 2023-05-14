import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { DetallePaisComponent } from './components/presentacion/pais/detalle-pais/detalle-pais.component';
// import { TablaPaisesComponent } from './components/pages/pais/tabla-paises/tabla-paises.component';
// import { AltaActoresComponent } from './components/pages/alta-actores/alta-actores.component';
// import { AltaActorComponent } from './components/presentacion/actor/alta-actor/alta-actor.component';
// import { AltaActorComponent } from './components/presentacion/actor/alta-actor/alta-actor.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAuth,getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    // DetallePaisComponent,
    // TablaPaisesComponent,
    // AltaActoresComponent,
    // AltaActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
