import { Component, OnInit } from '@angular/core';
import { Instrumento } from '../model/instrumento';
import { MemoryProdutosDataBase } from '../memory-produtos-data-base';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id:number;
  inst:Instrumento;
  instrumento:Instrumento[] =[];

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.id = params['id'];
      }
    )
    for (let inst of MemoryProdutosDataBase){
      if(inst.id == this.id){
        this.instrumento.push(inst);
      }
    }

  }

}
