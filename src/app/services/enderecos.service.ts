import { Injectable } from '@angular/core';
import { Endereco } from '../model/endereco';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {
  constructor(private httpClient:HttpClient) { }

  url:string = 'api/enderecos';

  getEnderecos():Observable<Endereco[]>{
    return this.httpClient.get<Endereco[]>(this.url);
  }
  
  getEndereco(id:number):Observable<Endereco>{
    return this.httpClient.get<Endereco>(`${this.url}/${id}`);
  }
  salvarEndereco(endereco:Endereco):Observable<Endereco>{
    return this.httpClient.post<Endereco>(this.url,endereco);
  }

}