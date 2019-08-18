import { Component, OnInit } from '@angular/core';
import { Instrumento } from '../model/instrumento';
import { MemoryProdutosDataBase } from '../memory-produtos-data-base';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  instEnable=false;
  detalhes(inst : Instrumento){
    this.inst = inst;
    this.instEnable=true;
  }
  
  inst:Instrumento;
  instrumento = MemoryProdutosDataBase;
  
  constructor() { }

  ngOnInit() {
  }

}
