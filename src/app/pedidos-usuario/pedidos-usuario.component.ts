import { Component, OnInit } from '@angular/core';
import { MemoryPedidoDataBase } from '../memory-pedido-data-base';

@Component({
  selector: 'app-pedidos-usuario',
  templateUrl: './pedidos-usuario.component.html',
  styleUrls: ['./pedidos-usuario.component.css']
})
export class PedidosUsuarioComponent implements OnInit {
  pedido = MemoryPedidoDataBase;
  display: boolean = false;

  showDialog() {
      this.display = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
