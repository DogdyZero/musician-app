import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produto } from '../model/produto';
import { CartService } from '../services/cart.service';
import { ProdutosService } from './../services/produtos.service';
import { ItemProduto } from '../model/item-produto';

@Component({
  selector: 'app-desc-produto',
  templateUrl: './desc-produto.component.html',
  styleUrls: ['./desc-produto.component.css']
})
export class DescProdutoComponent implements OnInit, OnDestroy {
  id:number;
  produto: Produto;
  inscricao :Subscription;
  tela:boolean = false;
  spinner:boolean = true;

  constructor(
    private produtoService :ProdutosService,
    private cartService:CartService,
    private activatedRoute: ActivatedRoute,
    private router:Router ) { }

  adicionarCarrinho(produto:Produto){
    let item:ItemProduto = new ItemProduto();
    item.produto =produto;
    this.cartService.adicionarItem(item);
    this.router.navigate(['/carrinho']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.id = params['id'];
      }
    );
      
    this.inscricao = this.produtoService.getProdutoById(this.id).subscribe(
      (data)=>{
        this.produto=data;
        this.tela=true;
        this.spinner=false;
      }
    );

  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();  
  }

}
