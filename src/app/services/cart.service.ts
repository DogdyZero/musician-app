import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
//import { Instrumento } from '../model/instrumento';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { ItemProduto } from './../model/item-produto';
import { Pedido } from '../model/pedido';
import { CarrinhoCompra } from '../model/carrinho';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }

  carrinho:CarrinhoCompra = new CarrinhoCompra();
  itensProdutos :ItemProduto[] =[];

  usuario:Usuario;

  adicionarItem(item:ItemProduto){
    if(!this.verificarDuplicidade(item)){
      this.itensProdutos.push(item);
      console.log(this.itensProdutos)
    }
  }
  verificarDuplicidade(item:ItemProduto){
    let aux:boolean;
    this.itensProdutos.forEach(element => {
      if(element.produto.id==item.produto.id){
        aux=true;
      }
    });
    if(aux){
      return true;
    }
    else{
      return false;
    }
  }
  getitensProdutos(){
    return this.itensProdutos;
  }
  updateQtdItemCompra(itens:ItemProduto[]){
    this.itensProdutos.forEach(itemService => {
      itens.forEach(itemTela => {
        if(itemTela.id==itemService.id){
          itemService.quantidade = itemTela.quantidade;
        }
      });
    });
    console.log(this.itensProdutos);
  }

  remove(id:number){
    for(let inst of this.itensProdutos){
      if(id==inst.produto.id){
        let index = this.itensProdutos.indexOf(inst);
        this.itensProdutos.splice(index,1);
      }
    }
  }
  isItensProdutosEmpty(){
    if(this.itensProdutos.length>0){
      return false;
    } else {
      return true;
    }
  }
  getCarrinho(){
    this.carrinho.itemProduto = this.getitensProdutos();
    return this.carrinho;
  }

 
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

  destroy(){
    this.carrinho = null;
    this.itensProdutos = null;
    this.carrinho = new CarrinhoCompra();
    this.itensProdutos = [];
  }
}
