import { Pedido } from './../model/pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private httpClient:HttpClient) { }

  //url:string = 'api/pessoas';
  url:string = "http://localhost:8080/pedidos";

  getPedidos():Observable<Pedido[]>{
    return this.httpClient.get<Pedido[]>(this.url);
  }
}
