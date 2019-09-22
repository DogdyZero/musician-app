import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  constructor(private httpClient:HttpClient) { }

  //url:string = 'api/pessoas';
  url:string = "http://localhost:8080/produtos";


  getProdutos():Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.url);
  }

  getProdutoById(id:number){
    return this.httpClient.get<Produto>(`${this.url}/${id}`).pipe();
  }

  salvarProduto(produto:Produto){
    console.log(produto);    
    return this.httpClient.post(this.url,produto,
      {headers:{
        'Accept':'application/json'}
    });
  }

  alterarProduto(produto:Produto){
    return this.httpClient.put(`${this.url}/${produto.id}`,produto,
    {headers:{
      'Accept':'application/json'}
  });
 }

 inativarProduto(id:number): Observable<{}>{
  return this.httpClient.delete(`${this.url}/${id}`).pipe();
}
}
