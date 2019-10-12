import { Pedido } from './../../model/pedido';
import { CuponsService } from './../../services/cupons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemProduto } from 'src/app/model/item-produto';
import { CartService } from 'src/app/services/cart.service';
import { FreteService } from 'src/app/services/frete.service';
import { Frete } from 'src/app/model/frete';

interface Cupom {
  name: string,
  code: string,
  valor: number;
}

@Component({
  selector: 'app-resumo-compra',
  templateUrl: './resumo-compra.component.html',
  styleUrls: ['./resumo-compra.component.css']
})

export class ResumoCompraComponent implements OnInit {
  @Input() valorTotal:number;
  @Output() valorCompra = new EventEmitter();
  
  id:number;
  @Input() sum: number;
  @Input() valorFrete:number=0;
  cupom: SelectItem[];
  selectedCupom: Cupom[];
  item:ItemProduto[]=[];
  totalCompra:number=0;
  
  constructor(private router:Router,
              private activatedRoute : ActivatedRoute,
              private carrinho:CartService) {
  }

  ngOnInit() {
    this.item = this.carrinho.getitensProdutos();
    this.item.forEach(element => {
      this.totalCompra=this.totalCompra + (element.valorProduto*element.quantidade*1);
    });

    /*this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.id = params['id'];
      }
    )*/
    
    /*this.cupom = [
      {label:'R$10', value:{id:1, name: 'Desconto10', code: 'MSC10', valor: 10}},
      {label:'R$20', value:{id:2, name: 'Desconto20', code: 'MSC20', valor: 20}},
      {label:'R$30', value:{id:3, name: 'Desconto30', code: 'MSC30', valor: 30}},
      {label:'R$40', value:{id:4, name: 'Desconto40', code: 'MSC40', valor: 40}},
      {label:'R$50', value:{id:5, name: 'Desconto50', code: 'MSC50', valor: 50}}
  ];*/

  }

  totalPago(){
    this.selectedCupom.forEach(element => {
        this.sum += parseInt(element.valor.toString()) ;
    });
    this.selectedCupom = [];
    this.valorCompra.emit(this.sum);
  }

}
