import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  constructor(private httpClient:HttpClient) { }
  url:string = 'http://localhost:8080/grafico';

  getGrafico(){
    return this.httpClient.get(this.url);
  }

}
