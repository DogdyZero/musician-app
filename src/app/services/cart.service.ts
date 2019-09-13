import { ItemProduto } from './../model/item-produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Instrumento } from '../model/instrumento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }
  //instrumentos : Instrumento[] =[];

  url:string = "http://localhost:8080/carrinho";


  addProduto(itemProduto:ItemProduto){
    return this.httpClient.post(this.url,ItemProduto,
      {headers:{
        'Accept':'application/json'}
    });
  }

  getProdutos():Observable<ItemProduto[]>{
    return this.httpClient.get<ItemProduto[]>(this.url);
  }

  /*addList(idInstrumento : number){
    for (let inst of MemoryProdutosDataBase){
      if(inst.id == idInstrumento){
        if(!this.checkIfAlreadyInList(idInstrumento)){
          this.instrumentos.push(inst);
        }
      }
    }
  }
  checkIfAlreadyInList(idInstrumento:number){
    for(let inst of this.instrumentos){
      if(idInstrumento==inst.id){
        return true;
      }
    }
    return false;
  }

  getInstrumentos(){
    return this.instrumentos;
  }
  removeOfList(idInstrumento:number){
    for(let inst of this.instrumentos){
      if(idInstrumento==inst.id){
        let index = this.instrumentos.indexOf(inst);
        this.instrumentos.splice(index,1);
      }
    }
  }
  getTotalInstrumentos(){
    return  this.instrumentos.length;
  }*/
}
