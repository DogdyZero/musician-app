import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-usuario',
  templateUrl: './pedidos-usuario.component.html',
  styleUrls: ['./pedidos-usuario.component.css']
})
export class PedidosUsuarioComponent implements OnInit {
  selectedValue: string;
  //pedido = MemoryPedidoDataBase;
  display: boolean = false;

  showDialog() {
      this.display = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
