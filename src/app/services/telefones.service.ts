import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Telefone } from '../model/telefone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefonesService {
  constructor(private httpClient:HttpClient) { }

  url:string = 'http://localhost:8080/telefones';


  getTelefones():Observable<Telefone[]>{
    return this.httpClient.get<Telefone[]>(this.url);
  }
  
  getTelefone(id:number):Observable<Telefone>{
    return this.httpClient.get<Telefone>(`${this.url}/${id}`);
  }
  salvarTelefone(telefone:Telefone):Observable<Telefone>{
    return this.httpClient.post<Telefone>(this.url,telefone);
  }
  alterarTelefone(telefone:Telefone){
    return this.httpClient.put(`${this.url}/${telefone.id}`,telefone);
  }
}
