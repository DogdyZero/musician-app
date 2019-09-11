import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Instrumento } from '../../model/instrumento';
import { CartService } from './cart.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id:number;
  inst:Instrumento;
  instrumento:Instrumento[];
 
  remove(id:number){
    //this.cartService.removeOfList(id);
  }

  comprar(){
    let resultado = this.usuariosService.getUsuarioId(this.id);
    if(resultado ==null){
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/compra',this.id]);
    }
  }

  constructor(
    private cartService : CartService,
    private usuariosService :UsuariosService,
    private  produtoService: ProdutosService,
    private router:Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.id = params['id'];
      }
    )
    this.produtoService.getProdutoById(this.id).subscribe(
      (data)=>{
        this.inst=data;
      }
    );
   // this.cartService.addList(this.id);

    //this.instrumento = this.cartService.getInstrumentos();

    
  }

}