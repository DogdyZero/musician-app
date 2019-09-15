import { Pedido } from './../../model/pedido';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  valorTotal:number;
  //valorCompra:number;
  sum = 0;
  //pedido:Pedido;


  constructor() { }
  
  ngOnInit() {
    /*this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.idPessoa = params['id'];
      }
    )*/

  }

  totalCompra(event){
    this.sum = event;
  }

  
}
