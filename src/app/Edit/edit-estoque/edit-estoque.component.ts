import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Estoque } from 'src/app/model/estoque';
import { Produto } from './../../model/produto';
import { ProdutosService } from './../../services/produtos.service';

@Component({
  selector: 'app-edit-estoque',
  templateUrl: './edit-estoque.component.html',
  styleUrls: ['./edit-estoque.component.css']
})
export class EditEstoqueComponent implements OnInit, OnDestroy {
  valorEstoque: string;

  @Input() produto: Produto;
  @Output() editProd = new EventEmitter()
  @Output() cancel = new EventEmitter()

  estoque:Estoque;
  inscricao:Subscription;
  constructor(
    private produtosService: ProdutosService,
    private router:Router
  ) { }

  ngOnInit() {
    this.inscricao = this.produtosService.getProdutoEstoque(this.produto.id).subscribe(data=>{
      this.estoque = data;
      console.log(data);
    })
  }

  editProduto(){
    this.editProd.emit(this.produto);
  }
  async cancelCad(){
    this.cancel.emit(null);
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
