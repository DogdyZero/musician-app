import { Pessoa } from './../model/pessoa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Telefone } from '../model/telefone';


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

  buscarPessoaCpf(cpf:string):Observable<Pessoa[]>{
    return this.httpClient.get<Pessoa[]>(`${this.url}/buscarCpf?cpf=${cpf}`);
  }
  buscarPessoaPorNome(nome :string ){
    return this.httpClient.get<Pessoa[]>(`${this.url}/buscarNome?nome=${nome}`);
  }
  
  getPessoa(id:number){
    return this.httpClient.get<Pessoa>(`${this.url}/${id}`).pipe();
  }
  salvarPessoa(pessoa:Pessoa){
    console.log(pessoa);    
    return this.httpClient.post(this.url,pessoa,
      {headers:{
        'Accept':'application/json'}
    });
  }
  alterarPessoa(pessoa:Pessoa){
    return this.httpClient.put(`${this.url}/${pessoa.id}`,pessoa,
    {headers:{
      'Accept':'application/json'}
  });
 }
 
 deletarPessoa(id:number): Observable<{}>{
  return this.httpClient.delete(`${this.url}/${id}`).pipe();
}



}
