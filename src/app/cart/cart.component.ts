import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Instrumento } from '../model/instrumento';
import { CartService } from './cart.service';

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

  }

  constructor(
    private cartService : CartService,
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
