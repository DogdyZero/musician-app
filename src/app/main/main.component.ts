import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Instrumento } from '../model/instrumento';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  instEnable=false;
  produto: Instrumento[];
  detalhes(inst : Instrumento){
    this.inst = inst;
    this.instEnable=true;
  }
  
  inst:Instrumento;
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
