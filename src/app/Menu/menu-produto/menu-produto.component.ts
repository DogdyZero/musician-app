import { ProdutosService } from './../../services/produtos.service';
import { Router } from '@angular/router';
import { Produto } from './../../model/produto';
import { Component, OnInit, Input } from '@angular/core';
import { Estoque } from 'src/app/model/estoque';
import { EstoqueService } from 'src/app/services/estoque.service';

@Component({
  selector: 'app-menu-produto',
  templateUrl: './menu-produto.component.html',
  styleUrls: ['./menu-produto.component.css']
})
export class MenuProdutoComponent implements OnInit {

  edit: Boolean = false;
  newProd: Boolean = false;

  produto: Produto = new Produto();
  constructor(
    private router: Router,
    private produtosService: ProdutosService,
    private estoqueService:EstoqueService
  ) { }

  ngOnInit() {
  }

  salvarProduto(produto: Produto) {
    this.produtosService.salvarProduto(produto).subscribe((data) => {
      let idProduto = data.id;
      if(idProduto!=null){
        let estoque:Estoque = new Estoque();
        estoque.quantidadeProduto =0;
        estoque.produto = data;
        this.estoqueService.salvarEstoque(estoque).subscribe();
      }
      this.router.navigate(['/admin']);
      this.newProd = false;
    }, (error) => {
      this.router.navigate(['/admin']);
      console.log(error);
    });
  }

    cancelarProd(event: Event){
      this.newProd = false;
    }

    cadastrarNovo(){
      this.newProd = true;
    }

  }