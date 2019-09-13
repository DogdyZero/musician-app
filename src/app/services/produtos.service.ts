import { HttpClient } from '@angular/common/http';
import { Instrumento } from './../model/instrumento';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  constructor(private httpClient:HttpClient) { }

  //url:string = 'api/pessoas';
  url:string = "http://localhost:8080/produtos";


  getProdutos():Observable<Instrumento[]>{
    return this.httpClient.get<Instrumento[]>(this.url);
  }

  getProdutoById(id:number){
    return this.httpClient.get<Instrumento>(`${this.url}/${id}`).pipe();
  }

  salvarProduto(instrumento:Instrumento){
    console.log(instrumento);    
    return this.httpClient.post(this.url,instrumento,
      {headers:{
        'Accept':'application/json'}
    });
  }

  alterarProduto(instrumento:Instrumento){
    return this.httpClient.put(`${this.url}/${instrumento.id}`,instrumento,
    {headers:{
      'Accept':'application/json'}
  });
 }

 inativarProduto(id:number): Observable<{}>{
  return this.httpClient.delete(`${this.url}/${id}`).pipe();
}
}
