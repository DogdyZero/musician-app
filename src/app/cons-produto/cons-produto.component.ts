import { Component, OnInit } from '@angular/core';
import { MemoryProdutosDataBase } from '../memory-produtos-data-base';

@Component({
  selector: 'app-cons-produto',
  templateUrl: './cons-produto.component.html',
  styleUrls: ['./cons-produto.component.css']
})
export class ConsProdutoComponent implements OnInit {
  instrumento = MemoryProdutosDataBase;
  constructor() { }

  ngOnInit() {
  }

}
