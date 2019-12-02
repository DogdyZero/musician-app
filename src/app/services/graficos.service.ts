import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  constructor(private httpClient:HttpClient) { }
  url:string = 'https://musician-app-backend.herokuapp.com/grafico';

  getGraficoInicial(){
    let hoje:Date = new Date();
    let dataInicioString:string = hoje.getFullYear()-1+"-"+(hoje.getMonth()+1)+"-"+hoje.getDate();
    let dataFinalString:string =hoje.getFullYear()+"-"+(hoje.getMonth()+1)+"-"+hoje.getDate() ;
    // return this.httpClient.get(`${this.url}?dataInicio=2019-01-01&dataFinal=2019-12-31`);
    return this.httpClient.get(`${this.url}?dataInicio=${dataInicioString}&dataFinal=${dataFinalString}`);

  }
  getGraficoEntre(dataInicio:Date, dataFinal:Date){
    let dataInicioString:string = dataInicio.getFullYear()+"-"+(dataInicio.getMonth()+1)+"-"+dataInicio.getDate();
    let dataFinalString:string =dataFinal.getFullYear()+"-"+(dataFinal.getMonth()+1)+"-"+dataFinal.getDate() ;
    return this.httpClient.get(`${this.url}?dataInicio=${dataInicioString}&dataFinal=${dataFinalString}`);
  }

}