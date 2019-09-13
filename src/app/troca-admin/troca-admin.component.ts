import { Pedido } from './../model/pedido';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-troca-admin',
  templateUrl: './troca-admin.component.html',
  styleUrls: ['./troca-admin.component.css']
})
export class TrocaAdminComponent implements OnInit {
  
  //pedido = MemoryPedidoDataBase;

  display: boolean = false;
  display2: boolean = false;
  pedido: Pedido[] = [];

  constructor() { }
  
  confirmarTroca() {
      this.display = true;
  }

  recusarTroca() {
    this.display2 = true;
}

  ngOnInit() {
    this.pedido = [
      {
          id: 1,
          cliente: null,
          itemProduto: null,
          frete: 100,
          total: null,
          data: null,
          status: null
      }
    ];
  }

  

}
