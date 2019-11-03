import { ItemProduto } from './../../model/item-produto';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from '../../model/produto';
import { CartService } from '../../services/cart.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Subscription } from 'rxjs';
import { Estoque } from 'src/app/model/estoque';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id:number;

  objList=[]
  // itemProduto:ItemProduto[]=[];
  // estoque:number [] =[];
  inscricao:Subscription;
  tela:boolean=false;
  spinner:boolean=true;

  remove(itemProduto:ItemProduto){
    this.cartService.remove(itemProduto.produto.id);
    this.router.navigate(['/carrinho']);
  }
  voltar(){
    this.router.navigate(['/']);
  }

  comprar(){
    let itemProduto:ItemProduto[]=[];
    for(let i of this.objList){
      itemProduto.push(i.item);
    }
    // console.log(itemProduto);

    this.cartService.updateQtdItemCompra(itemProduto);
    let resultado = this.usuariosService.getUsuario();
    if(resultado ==null){
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/compra']);
    }
  }

  constructor(
    private cartService : CartService,
    private usuariosService :UsuariosService,
    private produtoService:ProdutosService,
    private router:Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    setTimeout(() => {
      if(this.tela==false){
        alert('Ocorreu um erro na sua requisição, tente novamente mais tarde!')
        this.router.navigate(['/']);

      }
    }, 5000);
    let itensProduto = this.cartService.getitensProdutos();
    let qtdItem = itensProduto.length;
    let i = 0;
    for(let itemProduto of itensProduto){
      this.inscricao = this.produtoService.getProdutoEstoque(itemProduto.produto.id).subscribe(
        (data)=>{
          let qtd = data.quantidadeProduto;
          let item = itemProduto;
          let obj ={item,qtd};
          this.objList.push(obj)
          if(i<qtdItem)
            this.tela=true;
            this.spinner=false;
        }
      );
    }
  }
  ngOnDestroy(){
    if(this.inscricao!=null)
      this.inscricao.unsubscribe();
  }

}
