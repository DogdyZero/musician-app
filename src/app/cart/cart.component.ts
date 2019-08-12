import { Component, OnInit } from '@angular/core';
import { Instrumento } from '../model/instrumento';
import { MemoryProdutosDataBase } from '../memory-produtos-data-base';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  inst:Instrumento;
  instrumento=MemoryProdutosDataBase;

  constructor() { }

  ngOnInit() {
    }

}
