import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Instrumento } from '../model/instrumento';
import { CartService } from './cart.service';
import { UsuariosService } from '../services/usuarios.service';

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
    this.cartService.removeOfList(id);
  }

  comprar(){
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
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.id = params['id'];
      }
    )
    this.cartService.addList(this.id);

    this.instrumento = this.cartService.getInstrumentos();

    
  }

}
