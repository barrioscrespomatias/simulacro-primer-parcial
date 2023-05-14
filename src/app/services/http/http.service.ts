import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaisInterface } from 'src/app/interfaces/pais/pais';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }
  // https://restcountries.com/#api-endpoints-using-this-project

  Get(){
    return this.http.get<PaisInterface[]>('https://restcountries.com/v3.1/all');
  }
}