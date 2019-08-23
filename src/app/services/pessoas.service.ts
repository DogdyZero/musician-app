import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  constructor(private httpClient:HttpClient) { }

  //url:string = 'api/pessoas';
  url:string = "http://localhost:8080/pessoas";


  getPessoas():Observable<Pessoa[]>{
    return this.httpClient.get<Pessoa[]>(this.url);
  }
  
  getPessoa(id:number):Observable<Pessoa>{
    return this.httpClient.get<Pessoa>(`${this.url}/${id}`).pipe();
  }
  salvarPessoa(pessoa:Pessoa):Observable<Pessoa>{
    return this.httpClient.post<Pessoa>(this.url,pessoa, 
      {headers:{
        'Accept':'application/json'}
    });
  }

}
