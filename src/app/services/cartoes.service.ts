import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cartao } from '../model/cartao';

@Injectable({
  providedIn: 'root'
})
export class CartoesService {
  constructor(private httpClient:HttpClient) { }

  url:string = 'http://localhost:8080/cartoes';

  getCartoes():Observable<Cartao[]>{
    return this.httpClient.get<Cartao[]>(this.url);
  }
  
  getCartao(id:number):Observable<Cartao>{
    return this.httpClient.get<Cartao>(`${this.url}/${id}`);
  }

  salvarCartao(cartao:Cartao):Observable<Cartao>{
    return this.httpClient.post<Cartao>(this.url,cartao);
  }

  async getTotalCartoes(){
    let cartoes:Cartao[] = await this.httpClient.get<Cartao[]>(this.url).toPromise();
    return cartoes.length ;
  }

  alterarCartao(cartao:Cartao){
    return this.httpClient.put(`${this.url}/${cartao.id}`,cartao);
  }
}
