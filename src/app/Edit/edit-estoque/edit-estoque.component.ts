import { Router } from '@angular/router';
import { ProdutosService } from './../../services/produtos.service';
import { Produto } from './../../model/produto';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-estoque',
  templateUrl: './edit-estoque.component.html',
  styleUrls: ['./edit-estoque.component.css']
})
export class EditEstoqueComponent implements OnInit {
  valorEstoque: string;

  @Input() produto: Produto;
  @Output() editProd = new EventEmitter()
  @Output() cancel = new EventEmitter()

  constructor(
    private produtosService: ProdutosService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  editProduto(){
    this.editProd.emit(this.produto);
  }
  async cancelCad(){
    this.cancel.emit(null);
  }

}
