import { Injectable } from '@angular/core';
import { MemoryProdutosDataBase } from '../memory-produtos-data-base';

@Injectable({
  providedIn: 'root'
})
export class DescProdutoService {

  constructor() { }
  
  getInstrumentoById(id : number){
    for(let inst of MemoryProdutosDataBase){
      if(inst.id == id){
        return inst;
      }
    } 
  }

}
