import { Component, OnInit } from '@angular/core';
import { Instrumento } from '../model/instrumento';

@Component({
  selector: 'app-desc-produto',
  templateUrl: './desc-produto.component.html',
  styleUrls: ['./desc-produto.component.css']
})
export class DescProdutoComponent implements OnInit {
  instrumento: Instrumento;
  constructor() { }

  ngOnInit() {
    this.instrumento = {id: 1, nome:'Guitarra', marca:{nome:'Guibson'},ano:'2012',modelo:'Les paul',tipo:{tipo:'Corda'},linha:'10',preco:999.99,pathImage:'./assets/guitarra1.jpeg',descricao:'Modelo de refêrencia de diversos guitarrista, este modelo é uma réplica do modelo favorito usado pelo Slash'}
  }

}
