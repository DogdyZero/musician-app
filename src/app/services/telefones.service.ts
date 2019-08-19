import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Telefone } from '../model/telefone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefonesService {
  constructor(private httpClient:HttpClient) { }

  url:string = 'api/cartoes';

  getTelefones():Observable<Telefone[]>{
    return this.httpClient.get<Telefone[]>(this.url);
  }
  
  getTelefone(id:number):Observable<Telefone>{
    return this.httpClient.get<Telefone>(`${this.url}/${id}`);
  }
  salvarTelefone(telefone:Telefone):Observable<Telefone>{
    return this.httpClient.post<Telefone>(this.url,telefone);
  }
}
