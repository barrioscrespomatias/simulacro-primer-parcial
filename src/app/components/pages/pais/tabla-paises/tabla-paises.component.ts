import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { Pais } from 'src/app/clases/pais/pais';
import { PaisInterface } from 'src/app/interfaces/pais/pais';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {

  listaPaises!: Observable<Pais[]>;
  suscripcion!: Subscription;

  constructor(private httpService : HttpService){    
  }  

  ngOnInit(){
    this.listaPaises = this.httpService.Get().pipe(
      map((response: any[]) => response.map(pais => {
        const paisClass: Pais = {
          name: pais.name.common,
          capital: pais.capital?.[0] ?? '',
          flag: pais.flags?.svg ?? ''
        };
        return paisClass;
      }))
    );
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  @Output() onEnviarItemHaciaPadre = new EventEmitter<PaisInterface>();

  enviarItemHaciaPadre(pais: PaisInterface){
      this.onEnviarItemHaciaPadre.emit(pais)
    }  
}