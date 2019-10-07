import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class TrocaService {
  constructor(private httpClient:HttpClient) { }
  
  url:string = 'http://localhost:8080/troca';

  getPessoaTroca(id:number):Observable<Pessoa>{
    return this.httpClient.get<Pessoa>(`${this.url}/${id}`);
  }
}
