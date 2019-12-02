import { Injectable } from '@angular/core';
import { Estoque } from '../model/estoque';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  constructor(private httpClient:HttpClient) { }

  url:string = 'https://musician-app-backend.herokuapp.com/estoque';

  salvarEstoque(estoque:Estoque):Observable<Estoque>{
    return this.httpClient.post<Estoque>(this.url,estoque);
  }

  alterarEstoque(estoque:Estoque){
    return this.httpClient.put(`${this.url}/${estoque.id}`,estoque,
    {headers:{
      'Accept':'application/json'}
  });
  }

}
