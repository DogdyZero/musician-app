import { Component, OnInit } from '@angular/core';
import { MemoryPedidoDataBase } from '../memory-pedido-data-base';

@Component({
  selector: 'app-pedidos-admin',
  templateUrl: './pedidos-admin.component.html',
  styleUrls: ['./pedidos-admin.component.css']
})
export class PedidosAdminComponent implements OnInit {
  pedido = MemoryPedidoDataBase;

  constructor() { }

  ngOnInit() {
  }

}
