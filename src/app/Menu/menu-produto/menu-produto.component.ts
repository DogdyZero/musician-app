import { ProdutosService } from './../../services/produtos.service';
import { Router } from '@angular/router';
import { Produto } from './../../model/produto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-produto',
  templateUrl: './menu-produto.component.html',
  styleUrls: ['./menu-produto.component.css']
})
export class MenuProdutoComponent implements OnInit {

  edit:Boolean=false;
  
  produto:Produto = new Produto();
  constructor(
    private router:Router,
    private produtosService:ProdutosService,
  ) { }

  ngOnInit() {
  }

  salvarProduto(produto:Produto){
    this.produtosService.salvarProduto(produto).subscribe((data) =>{
      this.router.navigate(['/']);
    },(error) =>{
      this.router.navigate(['/']);
      console.log(error);
    });

  }

}
