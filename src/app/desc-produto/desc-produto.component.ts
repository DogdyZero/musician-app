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
  instrumento: Instrumento;
 
  constructor(private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.id = params['id'];
      }
    )
      // criar classe de servico
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
  }

}
