import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemProduto } from '../model/item-produto';
import { Statusitem } from '../model/status-item.enum';

@Injectable({
  providedIn: 'root'
})
export class ItemProdutoService {

  constructor(private httpClient:HttpClient) { }
  
  url:string = 'http://localhost:8080/item';

  getItensToTrade():Observable<ItemProduto[]>{
    return this.httpClient.get<ItemProduto[]>(this.url);
  }
  updateItemProduto(item:ItemProduto,id:number):Observable<ItemProduto>{
      return this.httpClient.put<ItemProduto>(`${this.url}/${id}`,item);
  }
  
  updateStatus(status:Statusitem,id:number):Observable<ItemProduto>{
    let item:ItemProduto = new ItemProduto();
    if(status!=null){
        item.statusItem = status;
      return this.updateItemProduto(item,id);
    }
  }
}
