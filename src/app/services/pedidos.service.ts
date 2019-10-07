import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusPedido } from '../model/status-pedido.enum';
import { Pedido } from './../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private httpClient:HttpClient) { }

  //url:string = 'api/pessoas';
  url:string = "http://localhost:8080/pedidos";

  pedido:Pedido;

  processarPedido(pedido:Pedido){
    if(this.pedido==null){
      this.pedido = new Pedido();
    }
    this.pedido=pedido;
  }
  getPreparedPedido(){
    return this.pedido;
  }
  getPedido(id:number):Observable<Pedido>{
    return this.httpClient.get<Pedido>(`${this.url}/${id}`);
  }

  getPedidos():Observable<Pedido[]>{
    return this.httpClient.get<Pedido[]>(this.url);
  }
  updateItemProduto(pedido:Pedido,id:number):Observable<Pedido>{
    return this.httpClient.put<Pedido>(`${this.url}/${id}`,pedido);
  }
  updateStatus(status:StatusPedido,id:number):Observable<Pedido>{
    let pedido:Pedido = new Pedido();
    if(status!=null){
      pedido.statusPedido = status;
      return this.updateItemProduto(pedido,id);
    }
  }
}
