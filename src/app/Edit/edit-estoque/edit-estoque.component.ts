import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Estoque } from './../../model/estoque';
import { Produto } from './../../model/produto';
import { ProdutosService } from './../../services/produtos.service';

@Component({
  selector: 'app-edit-estoque',
  templateUrl: './edit-estoque.component.html',
  styleUrls: ['./edit-estoque.component.css']
})
export class EditEstoqueComponent implements OnInit, OnDestroy {
  valorEstoque: string;

  @Input() idProduto:number;
  @Output() editProd = new EventEmitter()
  @Output() editEstq = new EventEmitter()
  @Output() cancel = new EventEmitter()
  
  produto:Produto;
  estoque:Estoque;
  inscricao:Subscription;
  constructor(
    private produtosService: ProdutosService,
    private router:Router
  ) { }
  ngOnInit() {
    this.produtosService.getProdutoById(this.idProduto).subscribe(
      (data)=>{
        console.log(data);
        this.produto =data;
      }
    )
    console.log("Prod:")
    console.log(this.idProduto)
    this.inscricao = this.produtosService.getProdutoEstoque(this.idProduto).subscribe(data=>{
      this.estoque = data;
      console.log("Estoque: ");
      console.log(data);
    })
  }

  editProduto(){
    console.log("Prod: ---");
    console.log(this.produto);
    this.editProd.emit(this.produto);
    this.editEstq.emit(this.estoque);
  }

  async cancelCad(){
    this.cancel.emit(null);
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
