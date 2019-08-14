import { Component, OnInit, Input } from '@angular/core';
import { Instrumento } from '../model/instrumento';
import { Route, ActivatedRoute } from '@angular/router';
import { MemoryProdutosDataBase } from '../memory-produtos-data-base';

@Component({
  selector: 'app-desc-produto',
  templateUrl: './desc-produto.component.html',
  styleUrls: ['./desc-produto.component.css']
})
export class DescProdutoComponent implements OnInit {
  id:number;
  @Input() instrumento1 : Instrumento;
   instrumento: Instrumento = new Instrumento();
 
  constructor(private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.id = params['id'];
      }
    )

    for(let inst of MemoryProdutosDataBase){
      if(inst.id == this.id){
        this.instrumento = {
            id: inst.id, 
            nome:inst.nome, 
            marca:{nome:inst.marca.nome},
            ano:inst.ano,
            modelo:inst.modelo,
            tipo:{tipo:inst.tipo.tipo},
            linha:inst.linha,
            preco:inst.preco,
            pathImage:inst.pathImage,
            descricao:inst.descricao}
      }
    }  
        //this.instrumento = {id: 1, nome:'guitarra', marca:{nome:'Guibson'},ano:'2012',modelo:'Les paul',tipo:{tipo:'Corda'},linha:'10',preco:999.99,pathImage:'./assets/guitarra1.jpeg',descricao:'Modelo de refêrencia de diversos guitarrista, este modelo é uma réplica do modelo favorito usado pelo Slash'}
    //this.instrumento = {
    //  id: this.instrumento.id, 
    //  nome:this.instrumento.nome, 
    //  marca:{nome:this.instrumento.marca.nome},
    //  ano:this.instrumento.ano,
    //  modelo:this.instrumento.modelo,
    //  tipo:{tipo:this.instrumento.tipo.tipo},
    //  linha:this.instrumento.linha,
    //  preco:this.instrumento.preco,
    //  pathImage:this.instrumento.pathImage,
    //  descricao:this.instrumento.descricao}
  }

}
