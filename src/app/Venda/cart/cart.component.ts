import { ItemProduto } from './../../model/item-produto';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from '../../model/produto';
import { CartService } from '../../services/cart.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id:number;
  itemProduto:ItemProduto[]=[];

  inscricao:Subscription;

  remove(id:number){
    this.cartService.remove(id);
  }
  voltar(){
    this.router.navigate(['/']);
  }

  comprar(){
    this.cartService.updateQtdItemCompra(this.itemProduto);
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
    private router:Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (params:any)=>{
    //     this.id = params['id'];
    //   }
    // );
    this.itemProduto = this.cartService.getitensProdutos();
  }
  ngOnDestroy(){
    // this.inscricao.unsubscribe();
  }

}
