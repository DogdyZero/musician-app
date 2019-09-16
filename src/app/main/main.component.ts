import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  instEnable=false;
  produto: Produto[];
  detalhes(inst : Produto){
    this.inst = inst;
    this.instEnable=true;
  }
  
  inst:Produto;
  //instrumento = MemoryProdutosDataBase;
  
  constructor(private produtoService:ProdutosService) { }

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(
      (data)=>{
        this.produto=data;
      }
    );
  }

}
