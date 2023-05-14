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

  listaPaises!: Observable<PaisInterface[]>;
  suscripcion!: Subscription;

  constructor(private httpService : HttpService){    
  }  

  ngOnInit(){
    this.listaPaises = this.httpService.Get().pipe(
      map((response: any[]) => response.map(pais => {
        const paisInterface: PaisInterface = {
          name: pais.name.common,
          capital: pais.capital?.[0] ?? '',
          flag: pais.flags?.svg ?? ''
        };
        return paisInterface;
      }))
    );
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  @Output() onEnviarItemHaciaPadre = new EventEmitter<Pais>();

  enviarItemHaciaPadre(pais: Pais){
      this.onEnviarItemHaciaPadre.emit(pais)
    }  
}