import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemProduto } from '../model/item-produto';

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
  
  updateStatus(itemProduto:ItemProduto,id:number):Observable<ItemProduto>{
      return this.updateItemProduto(itemProduto,id);
  }
  async updateStatusSinc(item:ItemProduto,id:number){
      await this.httpClient.put<ItemProduto>(`${this.url}/${id}`,item).toPromise();
  
  }

  
}
