import { Component, OnInit, Input } from '@angular/core';
import { Instrumento } from '../model/instrumento';
import { Route, ActivatedRoute } from '@angular/router';
import { MemoryProdutosDataBase } from '../memory-produtos-data-base';
import { DescProdutoService } from './desc-produto.service';

@Component({
  selector: 'app-desc-produto',
  templateUrl: './desc-produto.component.html',
  styleUrls: ['./desc-produto.component.css']
})
export class DescProdutoComponent implements OnInit {
  id:number;
  instrumento: Instrumento;
 
  constructor(
    private descricao :DescProdutoService,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.id = params['id'];
      }
    )
    this.instrumento = this.descricao.getInstrumentoById(this.id);
  }

}
