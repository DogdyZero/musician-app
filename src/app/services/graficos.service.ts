import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  constructor(private httpClient:HttpClient) { }
  url:string = 'http://localhost:8080/grafico';

  getGraficoInicial(){
    let hoje:Date = new Date();
    let mes = hoje.getMonth();
    let mesAtual = mes +1;
    let dataInicioString:string = hoje.getFullYear()-1+"-"+mesAtual+"-"+hoje.getDate();
    let dataFinalString:string =hoje.getFullYear()+"-"+mesAtual+"-"+hoje.getDate() ;
    // return this.httpClient.get(`${this.url}?dataInicio=2019-01-01&dataFinal=2019-12-31`);
    return this.httpClient.get(`${this.url}?dataInicio=${dataInicioString}&dataFinal=${dataFinalString}`);

  }
  getGraficoEntre(dataInicio:Date, dataFinal:Date){
    let mesInicio = dataInicio.getMonth();
    let mesFinal = dataFinal.getMonth();
    let novoMesInicio = mesInicio+1;
    let novoMesFinal = mesFinal+1;
    let dataInicioString:string = dataInicio.getFullYear()+"-"+novoMesInicio+"-"+dataInicio.getDate();
    let dataFinalString:string =dataFinal.getFullYear()+"-"+novoMesFinal+"-"+dataFinal.getDate() ;
    return this.httpClient.get(`${this.url}?dataInicio=${dataInicioString}&dataFinal=${dataFinalString}`);
  }

}
