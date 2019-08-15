import { Injectable } from '@angular/core';
import { Instrumento } from '../model/instrumento';
import { MemoryProdutosDataBase } from '../memory-produtos-data-base';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  instrumentos : Instrumento[] =[];

  addList(idInstrumento : number){
    for (let inst of MemoryProdutosDataBase){
      if(inst.id == idInstrumento){
        if(!this.checkIfAlreadyInList(idInstrumento)){
          this.instrumentos.push(inst);
        }
      }
    }
  }
  checkIfAlreadyInList(idInstrumento:number){
    for(let inst of this.instrumentos){
      if(idInstrumento==inst.id){
        return true;
      }
    }
    return false;
  }

  getInstrumentos(){
    return this.instrumentos;
  }
  removeOfList(idInstrumento:number){
    for(let inst of this.instrumentos){
      if(idInstrumento==inst.id){
        let index = this.instrumentos.indexOf(inst);
        this.instrumentos.splice(index,1);
      }
    }
  }
}
