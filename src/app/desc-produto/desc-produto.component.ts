import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { Produto } from '../model/produto';
import { Route, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-desc-produto',
  templateUrl: './desc-produto.component.html',
  styleUrls: ['./desc-produto.component.css']
})
export class DescProdutoComponent implements OnInit, OnDestroy {
  id:number;
  produto: Produto;
  inscricao :Subscription;
  constructor(
    private produtoService :ProdutosService,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.id = params['id'];
      }
    );
      
    this.inscricao = this.produtoService.getProdutoById(this.id).subscribe(
      (data)=>{
        this.produto=data;
      }
    );

  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();  
  }

}
