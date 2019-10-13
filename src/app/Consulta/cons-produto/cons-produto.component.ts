import { Router } from '@angular/router';
import { Produto } from './../../model/produto';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-cons-produto',
  templateUrl: './cons-produto.component.html',
  styleUrls: ['./cons-produto.component.css']
})
export class ConsProdutoComponent implements OnInit {
    //@Output() deletar = new EventEmitter() 
    produto: Produto[];
    idProd:number;
    
    constructor(
    private produtosService:ProdutosService,
    private router:Router
  ) { }

  ngOnInit() {
    this.produtosService.getTodosProdutos().subscribe((data) =>{
      this.produto = data;
    });

  }

  byId(){
    if(this.idProd.toString().length == 0){
      this.produtosService.getProdutos().subscribe(
       (data)=>{
         this.produto=data;
       }
     );
   }else {
     this.produtosService.getProdutoById(this.idProd).subscribe(
     (data)=>{
       this.produto= [];
       this.produto.push(data);
     }
   );
    }
  }

  deletar(id:number){
    this.produtosService.inativarProduto(id).subscribe();
    window.location.reload();
  }

}
