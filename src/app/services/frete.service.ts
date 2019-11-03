import { Injectable } from '@angular/core';
import { Frete } from '../model/frete';

@Injectable({
  providedIn: 'root'
})
export class FreteService {
    constructor() { }

    frete:Frete= new Frete();

    setFrete(frete:Frete){
      this.frete = frete;
      this.frete.calculoFrete=10;
      console.log(frete);
    }

    getFrete(){
      return this.frete;
    }
    destroy(){
      this.frete = null;
      this.frete = new Frete();
    }

}