import { Component, OnInit, Input } from '@angular/core';
import { Instrumento } from '../model/instrumento';

@Component({
  selector: 'app-desc-produto',
  templateUrl: './desc-produto.component.html',
  styleUrls: ['./desc-produto.component.css']
})
export class DescProdutoComponent implements OnInit {
  @Input() instrumento : Instrumento;
 // instrumento: Instrumento;
 
  constructor() { }

  ngOnInit() {
    //this.instrumento = {id: 1, nome:'guitarra', marca:{nome:'Guibson'},ano:'2012',modelo:'Les paul',tipo:{tipo:'Corda'},linha:'10',preco:999.99,pathImage:'./assets/guitarra1.jpeg',descricao:'Modelo de refêrencia de diversos guitarrista, este modelo é uma réplica do modelo favorito usado pelo Slash'}
    console.log(this.instrumento);
    this.instrumento = {
      id: this.instrumento.id, 
      nome:this.instrumento.nome, 
      marca:{nome:this.instrumento.marca.nome},
      ano:this.instrumento.ano,
      modelo:this.instrumento.modelo,
      tipo:{tipo:this.instrumento.tipo.tipo},
      linha:this.instrumento.linha,
      preco:this.instrumento.preco,
      pathImage:this.instrumento.pathImage,
      descricao:this.instrumento.descricao}
  }

}